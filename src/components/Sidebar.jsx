import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white shadow-md sticky top-0 z-50">
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-blue-500">SwapSkills</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden p-4`}
      >
        <button className="text-white text-2xl mb-4" onClick={toggleSidebar}>
          <X size={24} />
        </button>

        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/" onClick={toggleSidebar} className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={toggleSidebar} className="hover:text-blue-500">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleSidebar} className="hover:text-blue-500">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar} className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
