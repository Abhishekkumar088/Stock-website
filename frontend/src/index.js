import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';


import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignUp"
import AboutPage from "./landing_page/about/AboutPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notfound from "./landing_page/NotFound";
import Login from "./landing_page/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/products" element={<ProductPage/>}/>
       <Route path="/pricing" element={<PricingPage/>}/>
       <Route path="/support" element={<SupportPage/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="*" element={<Notfound/>}/>
     </Routes>
     <Footer/>
   </BrowserRouter>
);
