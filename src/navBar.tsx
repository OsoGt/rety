import "./App.css";
import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Tablet X",
      description: "Powerful tablet with a stunning display.",
      price: 299,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Smartphone Y",
      description: "High-performance smartphone with a great camera.",
      price: 499,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Headset Z",
      description: "Immersive audio experience with noise cancellation.",
      price: 199,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>E-Shop</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="nav-links">
          <a href="/cart">
            <FaShoppingCart /> Cart
          </a>
          <a href="/wishlist">
            <FaHeart /> Wishlist
          </a>
          <a href="/account">
            <FaUser /> Account
          </a>
        </div>
      </nav>

      <main>{/* Products section */}</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your trusted online shopping destination</p>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/shipping">Shipping Info</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
