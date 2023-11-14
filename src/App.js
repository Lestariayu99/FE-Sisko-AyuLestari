import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Products from './component/Products';
import ProdukDetail from './component/ProdukDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProdukDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
