require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
const allowedOrigins = [
    "https://stock-website-home.netlify.app",
    "https://stock-website-dashboard.netlify.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());   // use built-in instead of body-parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", authRoute);


app.get("/", (req, res) => {
  res.redirect("https://stock-website-home.netlify.app");
});

app.get("/allholdings", async (req, res) => {
  try {
    const allholdings = await HoldingsModel.find({});  
    res.status(200).json(allholdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Internal server error!" });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const allpositions = await PositionsModel.find({});
    res.status(200).json(allpositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Internal server error!" });
  }
});
app.post("/newPosition", async (req, res) => {
  let newPosition = new PositionsModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newPosition.save();
  res.send("Position saved!");
});
app.post("/newHolding", async (req, res) => {
  let newHolding = new HoldingsModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newHolding.save();
  res.send("Holding saved!");
});

app.post("/buyStocks", async (req, res) => {
  try {
    const { name, qty, } = req.body;

    // Basic validation
    if (!name || !qty || qty <= 0) {
      return res.status(400).json({ message: "Invalid stock name or quantity!" });
    }
  } catch (err) {
    console.error("Error buying stock:", err);
    res.status(500).json({ message: "Internal server error!" });
  }
});

    

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

app.post("/sellStocks", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Basic validation
    if (!name || !qty || qty <= 0) {
      return res.status(400).json({ message: "Invalid stock name or quantity!" });
    }

    let sellStock = new OrdersModel({
      name,
      qty,
      price,       // ✅ added price
      mode: "SELL", // ✅ hardcoded to avoid frontend sending wrong value
    });

    await sellStock.save();
    res.status(201).json({ message: "Stock sold successfully!" }); // ✅ proper response

  } catch (err) {
    console.error("Error selling stock:", err);
    res.status(500).json({ message: "Internal server error!" }); // ✅ error handling
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Internal server error!" });
  }
});



mongoose
  .connect(url)
  .then(() => {
    console.log("DB is connected");

    app.listen(PORT, () => {
      console.log("app started!");
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
  });
