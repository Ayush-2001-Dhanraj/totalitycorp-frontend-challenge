import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Lottie from "react-lottie";
import loadingAnimation from "../src/lotties/404.json";
import { Toaster } from "react-hot-toast";
import "./App.css";

export default function App() {
  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={<Lottie options={defaultAnimationOptions} height={400} />}
          />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
