import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SkillLevelSelector() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-blue-500 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-blue"></div>

      {/* Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-8 rounded-2xl backdrop-blur-md bg-white/10 shadow-lg border border-white/20 text-center max-w-sm"
      >
        <h1 className="text-white text-4xl font-bold mb-6 bg-green">Select Your Skill Level</h1>

        <div className="flex flex-col gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md cursor-pointer"
            onClick={() => navigate('/beginner')} 
          >
            Beginner 🚀
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md cursor-pointer"
            onClick={() => navigate('/intermediate')} 
          >
            Intermediate 🌟
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md cursor-pointer"
            onClick={() => navigate('/expert')} 
          >
            Expert 🔥
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillLevelSelector;
