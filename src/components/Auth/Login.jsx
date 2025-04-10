import { motion } from 'framer-motion';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import img2 from '../../assets/img2.jpg'; // Importing an image for the background

export default function Login() {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <motion.div
      className="login-container"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="login-card">
        <h1 className="text-4xl font-bold text-center text-log mb-6">
          Welcome Back to <span className="text-blue-600">SwapSkills</span>
        </h1>
        <p className="text-center text-gray-600 mb-8"></p>
          Login to continue sharing and discovering skills.<br></br>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button
            type="submit"
            className="login-button"
            onClick={() => navigate('/dashboard')}
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a
            className="text-blue-600 underline spanner"
            onClick={handleSignupRedirect} // Redirect to signup page
          >
            Sign Up
          </a>
        </p>
      </div>
    </motion.div>
  );
}