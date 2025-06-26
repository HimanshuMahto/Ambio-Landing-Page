import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cities = [
    'Indore', 'Bhopal', 'Nagpur', 'Pune', 'Ahmedabad', 'Surat', 
    'Vadodara', 'Nashik', 'Aurangabad', 'Solapur'
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary to-primary-border py-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy homeowners who found their perfect designer through AMBIO.
            </p>
            <motion.button
              className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">AMBIO</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Finally, interior design that gets Indian homes. Built for Tier-2 cities, 
                loved by thousands of families across India.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Interior Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home Consultation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Space Planning</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Designer Matching</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AR Visualization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Budget Planning</a></li>
              </ul>
            </div>

            {/* Cities Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Our Cities
              </h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                {cities.map(city => (
                  <a key={city} href="#" className="hover:text-primary transition-colors text-sm">
                    {city}
                  </a>
                ))}
              </div>
              <p className="text-primary text-sm mt-4 font-medium">
                + 40 more cities
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>hello@ambio.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                  <span className="leading-relaxed">
                    123 Design Street<br />
                    Indore, MP 452001
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Stay Inspired</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-primary focus:outline-none text-white placeholder-gray-400"
                  />
                  <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AMBIO. All rights reserved. Made with ❤️ for Indian homes.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
              </div>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;