import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentStat, setCurrentStat] = useState(0);

  const socialProofStats = [
    "⭐ 4.9/5 from 3,500+ transformed homes",
    "🏠 Stunning designs starting ₹20,000",
    "📍 Expert designers in 75+ cities", 
    "🔥 2,000+ designs completed this month",
    "💰 Save 40% vs traditional interior designers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % socialProofStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Panel - Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Enhanced Logo */}
          {/* <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-700/30 rounded-2xl blur-md -z-10"></div>
            </div>
            <div>
              <span className="text-3xl font-bold text-ambio-authority tracking-tight">AMBIO</span>
              <p className="text-sm text-ambio-guide font-medium -mt-1">Interior Design Excellence</p>
            </div>
          </motion.div> */}

          {/* Enhanced Pre-headline */}
          {/* <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <div className="flex -space-x-1">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
              ))}
            </div>
            <p className="text-ambio-guide font-semibold">
              Join <span className="text-ambio-earth font-bold">15,000+</span> Indians who refused to compromise
            </p>
          </motion.div> */}

          {/* Enhanced Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl lg:text-hero font-extrabold text-ambio-authority leading-tight"
          >
            Find Interior Designers Who{' '}
            <span className="relative inline-block">
              <span className="gradient-text">
                Actually Get
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-amber-300/50 to-orange-300/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 1 }}
              ></motion.div>
            </span>{' '}
            Your Space, Style & Budget
          </motion.h1>

          {/* Enhanced Value Proposition */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-ambio-guide leading-relaxed max-w-xl"
          >
            The first interior design platform built specifically for Tier-2 India. 
            <span className="text-ambio-earth font-semibold"> Real designers, real budgets, real transformations</span> in Indore, Bhopal, 
            Nagpur, and 75+ growing cities.
          </motion.p>

          {/* Enhanced Social Proof Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStat}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-ambio-earth font-semibold text-lg w-full text-center"
                >
                  {socialProofStats[currentStat]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Primary CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                boxShadow: "0 25px 50px rgba(109, 68, 50, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary bg-gradient-to-r from-amber-700 to-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Join the Waitlist.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
{/*             
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-ambio-earth/30 text-ambio-earth px-10 py-5 rounded-2xl font-semibold text-lg hover:border-ambio-earth/50 hover:bg-ambio-earth/5 transition-all duration-300"
            >
              View Portfolio
            </motion.button> */}
          </motion.div>
        </motion.div>

        <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative lg:ml-auto"
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-20"
              >
                <img
                  src="/Images/heroImg.jpeg"
                  alt="Modern Interior Design"
                  className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-[500px] mx-auto"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -left-8 z-30"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Project Completed</p>
                      <p className="text-xs text-slate-600">₹2.5L Budget • Indore</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 z-30"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">★</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">4.9 Rating</p>
                      <p className="text-xs text-slate-600">3,500+ Reviews</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;