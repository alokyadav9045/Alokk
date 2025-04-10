import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* Main content area */}

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
// This is a simple React application that uses React Router for navigation.
// It has two main pages: HomePage and DashboardPage.