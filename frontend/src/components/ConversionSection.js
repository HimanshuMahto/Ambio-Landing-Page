import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Shield, Users, MapPin, Sparkles } from 'lucide-react';

const ConversionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    email: '',
    city: '',
    styles: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const cities = [
    'Indore', 'Bhopal', 'Nagpur', 'Pune', 'Ahmedabad', 'Surat', 
    'Vadodara', 'Nashik', 'Aurangabad', 'Solapur', 'Dhule', 'Amravati'
  ];

  const stylePreferences = [
    'Minimalist', 'Modern Indian', 'Boho Chic', 'Scandinavian', 
    'Contemporary', 'Traditional', 'Industrial', 'Rustic'
  ];

  const handleStyleToggle = (style) => {
    setFormData(prev => ({
      ...prev,
      styles: prev.styles.includes(style) 
        ? prev.styles.filter(s => s !== style)
        : [...prev.styles, style]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-border/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to the AMBIO Family! 🎉
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Your design journey starts now. We're matching you with the perfect local designers in {formData.city}.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="text-left space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center mr-3">1</div>
                  <span className="text-sm">We'll send you curated designer profiles within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center mr-3">2</div>
                  <span className="text-sm">Schedule free consultations with your top 3 matches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center mr-3">3</div>
                  <span className="text-sm">Start your dream home transformation!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-border/5 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1688413709025-5f085266935a"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section font-bold text-foreground mb-6">
            Join 10,000+ Indians 
            <span className="text-primary"> Designing Better Homes</span>
          </h2>
          
          {/* Social Proof Counter */}
          <motion.div 
            className="flex justify-center items-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-primary/10">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="User" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    <span className="font-semibold text-foreground">2,847 joined this week</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Form Card */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-foreground placeholder-text-muted"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Your City
                </label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-foreground"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Style Preferences */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Your Style Preferences (Optional)
                </label>
                <div className="flex flex-wrap gap-3">
                  {stylePreferences.map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleStyleToggle(style)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        formData.styles.includes(style)
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-foreground hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Designer Match
              </motion.button>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Free consultation worth ₹2,000
                </div>
                <div className="flex items-center text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Exclusive Tier-2 city network
                </div>
                <div className="flex items-center text-sm text-text-muted">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  No spam, just inspiration
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-text-muted mb-4">
            Trusted by homeowners in 50+ cities across India
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <div className="text-sm font-medium">4.8/5 Rating</div>
            <div className="text-sm">|</div>
            <div className="text-sm font-medium">2,000+ Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionSection;