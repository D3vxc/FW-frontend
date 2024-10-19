import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Header from './components/header.jsx'; // Import Header component
import HomePage from './pages/HomePage.jsx'; // Import your pages
import SignupPage from '../src/components/SignupForm.js';
import UserProfile from './pages/UserProfile.jsx';
import Cart from './components/cart.jsx';
// import ProductListingPage from './pages/ProductListingPage.jsx';
// import ProductDetailPage from './pages/ProductDetailPage.jsx';
// import CartPage from './pages/CartPage.jsx';
// import CheckoutPage from './pages/CheckoutPage.jsx';
// import LoginPage from './pages/LoginPage.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx'; // Import NotFoundPage
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

function App() {
  return (
    <div className="App">
      {/* Header component added here */}
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/products" element={<ProductListingPage />} /> */}
        {/* Product Listing Page */}
        {/* <Route path="/product/:id" element={<ProductDetailPage />} /> */}
        {/* Product Detail Page */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* Cart Page */}
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        {/* Checkout Page */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* Login Page */}
        {/* Signup Page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* Not Found Page */}
      </Routes>
    </div>
  );
}

export default App;
