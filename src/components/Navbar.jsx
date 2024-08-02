import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import CustomSelect from './CustomSelect';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const options = ['SELECT CATEGORY', 'Option 1', 'Option 2', 'Option 3'];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-red">Perfume</span><span className="logo-white">Parlor</span>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search for products" className="search-input" />
          <CustomSelect options={options}/>
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="navbar-icons">
          <div className="login-button">
            <a href="/login">LOGIN / REGISTER</a>
          </div>
          <div className="navbar-icon">
            <FaHeart style={{fontSize:'32px'}} />
            <span className="icon-badge-heart icon-badge">0</span>
          </div>
          <div className="navbar-icon">
            <FaShoppingBag style={{fontSize:'32px'}} />
            <span className="icon-badge-cart icon-badge">0</span>
            <span className="cart-amount">Rs 0.00</span>
          </div>
        </div>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
          {/* Add more menu items here */}
        </ul>
      </div>
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Navbar;
