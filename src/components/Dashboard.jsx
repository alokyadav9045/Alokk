import { motion } from 'framer-motion';
import { Users, UserCheck, BarChart2 } from 'lucide-react';
import img2 from '../assets/img2.jpg'; // Background image

export default function Dashboard() {
  const stats = [
    { label: 'Swaps Confirmed', value: 2 },
    { label: 'Skills Offered', value: 5 },
    { label: 'Reviews', value: 2 },
  ];

  const actions = [
    { label: 'View Nearby Users', icon: Users },
    { label: 'Edit Profile', icon: UserCheck },
    { label: 'My Swap Requests', icon: BarChart2 },
  ];

  return (
    <motion.div
      className="flex flex-col gap-8 p-4 md:p-8 rounded-xl shadow-lg"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 text-center drop-shadow-sm">
        Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transform transition"
          >
            <p className="text-4xl font-bold mb-2">{stat.value}</p>
            <p className="text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actions.map(({ label, icon: Icon }) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-xl shadow hover:shadow-lg transition"
          >
            <Icon size={24} className="text-blue-700 group-hover:text-blue-900 transition" />
            <span className="text-lg font-medium">{label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
