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

app.use(cors({
    origin:"https://stock-website-home.netlify.app/",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());   // use built-in instead of body-parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
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
