import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, IndianRupee } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236D4432' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12">
          
          {/* Left Panel - Content */}
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-primary">AMBIO</h1>
            </motion.div>

            {/* Hero Headline */}
            <motion.h2 
              className="text-hero font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ letterSpacing: '-0.02em' }}
            >
              Find Interior Designers Who Actually Get Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary-border bg-clip-text text-transparent">
                Space, Style & Budget
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p 
              className="text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Built for Indian homes. Loved in Indore, Bhopal, Nagpur & 50+ Tier-2 cities.
            </motion.p>

            {/* Social Proof Badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" />
                <span className="text-sm font-medium text-foreground">4.8/5 from 2,000+ homes</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <IndianRupee className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Designs starting ₹25,000</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Available in 50+ cities</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Designer Match
            </motion.button>
          </motion.div>

          {/* Right Panel - Visual */}
          <motion.div 
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-border rounded-3xl p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1710993012000-f109972e3b8f"
                    alt="Ambio App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Design Cards */}
            <motion.div 
              className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-xl shadow-lg overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                alt="Modern Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1649083048770-82e8ffd80431"
                alt="Contemporary Living"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;