import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <button className="menu-button" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <Link to="/" className="navbar-logo">
            SwapSkills
          </Link>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              className="navbar-search-input"
            />
          </div>

          <ul className="navbar-links">
            <li>
              <Link
                to="/"
                className={`navbar-link ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`navbar-link ${pathname === '/dashboard' ? 'active' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`navbar-link ${pathname === '/skills' ? 'active' : ''}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`navbar-link ${pathname === '/contact' ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="navbar-auth-buttons">
            <button
              className="navbar-button login-button"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <X size={24} />
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleSidebar}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
