import { motion } from 'framer-motion';
import { MapPin, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${require('../assets/img2.jpg')})` }}
      >
        <section className="w-full h-[400px] py-24 px-4 text-white text-center flex flex-col items-center justify-center font-semibold text-lg rounded-xl my-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 drop-shadow-lg mb-4">
            Welcome to <span className="text-[rgb(46,120,249)]">SwapSkills</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-medium drop-shadow-md">
            A vibrant platform to exchange your talents — from coding to cooking, from singing to storytelling. Grow. Share. Learn. Repeat.
          </p>
        </section>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 my-12 px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center px-6 py-3 text-white text-base font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-all"
          onClick={() => navigate('/dashboard')}
        >
          <MapPin className="mr-2" /> Explore Nearby
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center px-6 py-3 text-blue-500 text-base font-semibold rounded-lg border-2 border-blue-500 bg-white hover:bg-blue-50 transition-all"
          onClick={() => navigate('/post')}
        >
          <Plus className="mr-2" /> Post Your Skills
        </motion.button>
      </div>

      <hr className="mx-8 border-gray-300" />
      <Skills />
      <Contact />

      {/* Footer */}
      <section className="bg-gray-900 text-white pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {/* SwapSkills Info */}
          <div className="flex-1 min-w-[250px] max-w-xs">
            <h3 className="text-2xl text-blue-500 font-semibold pb-2">SwapSkills</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Thank you for being a part of SwapSkills. Connect, share, and grow with our vibrant community. <br /><br /> Let's build a world of shared talents together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px] max-w-xs">
            <h3 className="text-2xl text-blue-500 font-semibold pb-2">Quick Links</h3>
            {["Home", "About", "Skills", "Contact", "FAQ"].map(link => (
              <a key={link} href={`/${link.toLowerCase()}`} className="block text-gray-200 text-sm py-1 hover:text-blue-500 transition-all">
                <i className="fas fa-chevron-circle-right mr-2"></i>{link}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[250px] max-w-xs">
            <h3 className="text-2xl text-blue-500 font-semibold pb-2">Contact Info</h3>
            <p className="text-gray-300 text-base py-1"><i className="fas fa-phone text-blue-500 mr-2"></i>+91 1234567890</p>
            <p className="text-gray-300 text-base py-1"><i className="fas fa-envelope text-blue-500 mr-2"></i>support@swapskills.com</p>
            <p className="text-gray-300 text-base py-1"><i className="fas fa-map-marked-alt text-blue-500 mr-2"></i>New Delhi, India</p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.linkedin.com/company/swapskills" target="_blank" className="bg-gray-200 text-blue-900 hover:text-blue-500 p-2 rounded-full text-lg transition-all"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/swapskills" target="_blank" className="bg-gray-200 text-blue-900 hover:text-blue-500 p-2 rounded-full text-lg transition-all"><i className="fab fa-github"></i></a>
              <a href="mailto:support@swapskills.com" target="_blank" className="bg-gray-200 text-blue-900 hover:text-blue-500 p-2 rounded-full text-lg transition-all"><i className="fas fa-envelope"></i></a>
              <a href="https://t.me/swapskills" target="_blank" className="bg-gray-200 text-blue-900 hover:text-blue-500 p-2 rounded-full text-lg transition-all"><i className="fab fa-telegram-plane"></i></a>
            </div>
          </div>
        </div>
        <h1 className="text-center text-white text-sm font-semibold mt-6 border-t border-white pt-4 font-nunito">
          Designed with <i className="fa fa-heart text-red-600 animate-pulse mx-1"></i> by the <span className="text-blue-500">SwapSkills Team</span>
        </h1>
      </section>
    </motion.div>
  );
};

export default Home;
