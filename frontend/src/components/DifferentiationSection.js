import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Check, Heart } from 'lucide-react';

const DifferentiationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const platforms = [
    {
      name: 'PINTEREST',
      logo: '📌',
      missing: [
        'No Local Designers',
        'No Budget Transparency',
        'Just Pretty Pictures'
      ],
      available: [],
      failureReason: 'Great for dreaming, terrible for doing',
      isAmbio: false
    },
    {
      name: 'URBANCLAP',
      logo: '🔧',
      missing: [
        'Generic Metro-City Focus',
        'Hidden Pricing',
        'One-Size-Fits-All'
      ],
      available: [],
      failureReason: "They don't understand Tier-2 needs",
      isAmbio: false
    },
    {
      name: 'AMBIO',
      logo: '🏠',
      missing: [],
      available: [
        'Verified Local Designers in Your City',
        'Transparent Portfolio + Pricing',
        'AR Preview Before You Commit',
        'Personalized for Indian Homes'
      ],
      failureReason: 'Finally, design that gets YOU',
      isAmbio: true
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236D4432' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            Why Settle for 
            <span className="text-primary"> Generic Solutions</span>?
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Most platforms treat Indian homes like afterthoughts. We built AMBIO specifically for you.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                platform.isAmbio 
                  ? 'bg-primary/5 border-primary shadow-2xl animate-pulse-glow' 
                  : 'bg-white/50 border-gray-200 hover:border-gray-300'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Platform Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{platform.logo}</div>
                <h3 className={`text-xl font-bold ${platform.isAmbio ? 'text-primary' : 'text-foreground'}`}>
                  {platform.name}
                </h3>
              </div>

              {/* Missing Features */}
              {platform.missing.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
                    What You Don't Get
                  </h4>
                  <ul className="space-y-2">
                    {platform.missing.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Available Features */}
              {platform.available.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                    What You Get
                  </h4>
                  <ul className="space-y-2">
                    {platform.available.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Failure Reason / Success Message */}
              <div className={`p-4 rounded-xl ${
                platform.isAmbio 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-start">
                  {platform.isAmbio ? (
                    <Heart className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" />
                  ) : (
                    <Heart className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  )}
                  <p className={`text-sm font-medium ${
                    platform.isAmbio ? 'text-green-800' : 'text-red-800'
                  }`}>
                    "{platform.failureReason}"
                  </p>
                </div>
              </div>

              {/* Ambio Special CTA */}
              {platform.isAmbio && (
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    Try AMBIO Today
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;