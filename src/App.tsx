import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { ContactButtons } from "./components/ContactButtons";
import { HomePage } from "./pages/HomePage";
import { ProductDetail } from "./pages/ProductDetail";
import { ScrollProvider } from "./components/ScrollContext";
import './assets/css/style.css';

export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-white">
        <Helmet>
          <meta name="keywords" content="wagyu, thịt bò nhật, thịt bò wagyu, a5 wagyu, thịt bò cao cấp" />
          <meta name="author" content="LongKhang Wagyu Shop" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="Vietnamese" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#DC2626" />
        </Helmet>
        <ScrollProvider>
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
        <ContactButtons />
        </ScrollProvider>
      </div>
    </Router>;
}