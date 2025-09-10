import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: BookOpen, value: '300+', label: 'Expert Tutors' },
    { icon: Users, value: '5K+', label: 'Students Helped' },
    { icon: Award, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      {/* Animated SVG Blobs Background */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="20%" cy="30%" r="120" fill="#a5b4fc" opacity="0.15">
            <animate attributeName="cx" values="20%;30%;20%" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="30%;40%;30%" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="70%" r="100" fill="#f9a8d4" opacity="0.13">
            <animate attributeName="cy" values="70%;60%;70%" dur="14s" repeatCount="indefinite" />
            <animate attributeName="cx" values="80%;70%;80%" dur="11s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="10%" r="80" fill="#fef08a" opacity="0.11">
            <animate attributeName="cy" values="10%;20%;10%" dur="13s" repeatCount="indefinite" />
            <animate attributeName="cx" values="50%;60%;50%" dur="9s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Find Your Perfect <span className="text-blue-400">Tutor</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Get personalized tutoring that matches your learning style, schedule, and academic needs. 
              Our expert tutors are here to help you succeed in any subject or test preparation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-6 text-white text-center">
                <BookOpen className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Get Matched Today</h3>
                <p className="text-blue-100">Connect with your ideal tutor</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg"
            >
              <Award className="h-6 w-6 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg"
            >
              <Users className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;