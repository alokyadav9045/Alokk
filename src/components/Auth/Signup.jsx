import { motion } from 'framer-motion';
import '../styles/Login.css'; // Reusing the same CSS as Login
import { useNavigate } from 'react-router-dom';
import img2 from '../../assets/img2.jpg';

export default function Signup() {
  const navigate = useNavigate();

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
          Join <span className="text-blue-600">SwapSkills</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Create an account to start sharing and discovering skills.
        </p>
        <form className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            required
          />
          <button
            type="submit"
            className="login-button"
            onClick={() => navigate('/dashboard')}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer spanner"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </motion.div>
  );
}