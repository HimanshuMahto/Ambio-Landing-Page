import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PersonalizedEntryPoints = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState(null);

  const entryPoints = [
    {
      id: 'space',
      icon: '🏠',
      title: 'By Space Intelligence',
      subtitle: 'Right-sized solutions for your square footage',
      options: [
        {
          name: 'Studio Smart (400-600 sq ft)',
          description: 'Maximum impact in minimum space',
          image: 'https://images.unsplash.com/photo-1740989488591-55648f155236',
          popular: false
        },
        {
          name: 'Compact Family (600-900 sq ft)',
          description: 'Every inch works harder for you', 
          image: 'https://images.unsplash.com/photo-1745429523637-60f5986cc1db',
          popular: true
        },
        {
          name: 'Growing Family (900-1200 sq ft)',
          description: 'Space that evolves with your dreams',
          image: 'https://images.unsplash.com/photo-1745429523635-ad375f836bf2',
          popular: false
        },
        {
          name: 'Spacious Haven (1200+ sq ft)',
          description: 'Create experiences in every room',
          image: 'https://images.pexels.com/photos/28464715/pexels-photo-28464715.jpeg',
          popular: false
        }
      ]
    },
    {
      id: 'room',
      icon: '🎨',
      title: 'By Room Focus',
      subtitle: 'Transform the spaces that matter most',
      options: [
        {
          name: 'Living Room Revolution',
          description: 'Where your family story unfolds daily',
          image: 'https://images.unsplash.com/photo-1745429523617-0d837856ca35',
          popular: true
        },
        {
          name: 'Bedroom Sanctuary',
          description: 'Your personal retreat from the world',
          image: 'https://images.unsplash.com/photo-1708616178113-f687b1113414',
          popular: false
        },
        {
          name: 'Kitchen Transformation',
          description: 'The heart of every Indian home',
          image: 'https://images.pexels.com/photos/7208695/pexels-photo-7208695.jpeg',
          popular: false
        },
        {
          name: 'Home Office Haven',
          description: 'Productivity meets personality',
          image: 'https://images.unsplash.com/photo-1637999052989-4d7cf96bb805',
          popular: false
        }
      ]
    },
    {
      id: 'budget',
      icon: '💰',
      title: 'By Budget Reality',
      subtitle: 'Transparent pricing for every dream',
      options: [
        {
          name: 'Smart Starters (₹20K-₹60K)',
          description: 'Big transformation, small investment',
          image: 'https://images.pexels.com/photos/7208624/pexels-photo-7208624.jpeg',
          popular: false
        },
        {
          name: 'Sweet Spot (₹60K-₹1.5L)',
          description: 'Premium feel without premium pain',
          image: 'https://images.unsplash.com/photo-1745429523615-2a82c60bfc02',
          popular: true
        },
        {
          name: 'Dream Makers (₹1.5L-₹3L)',
          description: 'Custom luxury within reach',
          image: 'https://images.unsplash.com/photo-1724315070470-7314758eb7d2',
          popular: false
        },
        {
          name: 'Ultimate Experience (₹3L+)',
          description: 'Unlimited imagination, unlimited budget',
          image: 'https://images.unsplash.com/photo-1609483477265-b53753b779cf',
          popular: false
        }
      ]
    },
    {
      id: 'style',
      icon: '✨',
      title: 'By Aesthetic Personality',
      subtitle: 'Designs that reflect your soul',
      options: [
        {
          name: 'Minimalist Zen',
          description: 'Less stuff, more soul',
          image: 'https://images.unsplash.com/photo-1708616178113-f687b1113414',
          popular: false
        },
        {
          name: 'Modern Indian Fusion',
          description: 'Tradition with a contemporary twist',
          image: 'https://images.unsplash.com/photo-1724315070470-7314758eb7d2',
          popular: true
        },
        {
          name: 'Boho Free Spirit',
          description: 'Curated chaos meets organized beauty',
          image: 'https://images.pexels.com/photos/7208624/pexels-photo-7208624.jpeg',
          popular: false
        },
        {
          name: 'Classic Elegant',
          description: 'Timeless sophistication',
          image: 'https://images.unsplash.com/photo-1609483477265-b53753b779cf',
          popular: false
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-white to-ambio-canvas/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-section-hero font-bold text-ambio-authority mb-4">
            Find Your Perfect Starting Point
          </h2>
          <p className="text-lg text-ambio-guide max-w-2xl mx-auto">
            Eliminate choice paralysis through intelligent path personalization. Choose your journey.
          </p>
        </motion.div>

        {/* Entry Point Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {entryPoints.map((entry) => (
            <motion.div
              key={entry.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(entry.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-ambio-warm/5 via-transparent to-excitement-pop/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{entry.icon}</div>
                  <h3 className="text-2xl font-bold text-ambio-authority mb-2">{entry.title}</h3>
                  <p className="text-ambio-guide">{entry.subtitle}</p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {entry.options.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="relative group/option cursor-pointer"
                    >
                      {/* Popular Badge */}
                      {option.popular && (
                        <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-excitement-pop to-warning-bright text-white text-xs font-bold px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}

                      <div className="bg-white/80 rounded-2xl overflow-hidden border border-gray-100 shadow-lg group-hover/option:shadow-xl transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/option:scale-110"
                            loading="lazy"
                            onLoad={(e) => e.target.classList.add('loaded')}

                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h4 className="font-semibold text-ambio-authority text-sm mb-1 line-clamp-2">
                            {option.name}
                          </h4>
                          <p className="text-xs text-ambio-guide line-clamp-2">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-gradient-to-r from-ambio-earth to-ambio-warm text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore {entry.title}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-ambio-guide mb-6">
            Not sure which path fits you best? Let our AI recommend the perfect starting point
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-trust-deep to-success-glow text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Personalized Recommendation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedEntryPoints;