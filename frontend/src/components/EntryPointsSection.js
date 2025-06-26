import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Sofa, IndianRupee, Palette } from 'lucide-react';

const EntryPointsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPath, setSelectedPath] = useState(null);

  const entryPoints = [
    {
      id: 'space',
      icon: Home,
      title: 'BY SPACE TYPE',
      subtitle: 'Choose Your Home Size',
      image: 'https://images.unsplash.com/photo-1660915076159-def99bbbc1bb',
      options: [
        { label: '1BHK Compact Living', desc: 'Max style, min space', popular: 'Popular in Tier-2' },
        { label: '2BHK Family Haven', desc: 'Balance work, play, rest', popular: 'Most Chosen' },
        { label: '3BHK Dream Home', desc: 'Every room tells a story', popular: 'Premium Choice' }
      ]
    },
    {
      id: 'room',
      icon: Sofa,
      title: 'BY ROOM FOCUS',
      subtitle: 'Transform One Room at a Time',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      options: [
        { label: 'Living Room Magic', desc: 'Where life happens', popular: '40% choose this' },
        { label: 'Bedroom Sanctuary', desc: 'Your personal retreat', popular: 'Most relaxing' },
        { label: 'Kitchen Revolution', desc: 'Heart of Indian homes', popular: 'High impact' }
      ]
    },
    {
      id: 'budget',
      icon: IndianRupee,
      title: 'BY BUDGET REALITY',
      subtitle: 'Honest Pricing for Real People',
      image: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b',
      options: [
        { label: 'Smart Starters (₹25k-75k)', desc: 'Big impact, small budget', popular: 'Great value' },
        { label: 'Comfort Zone (₹75k-2L)', desc: 'Premium feel, fair price', popular: 'Sweet spot' },
        { label: 'Dream Tier (₹2L+)', desc: 'Luxury without limits', popular: 'Full makeover' }
      ]
    },
    {
      id: 'style',
      icon: Palette,
      title: 'BY STYLE VIBE',
      subtitle: 'Express Your Personality',
      image: 'https://images.unsplash.com/photo-1667522240093-c1f441a920eb',
      options: [
        { label: 'Minimalist Zen', desc: 'Less stuff, more life', popular: 'Trending now' },
        { label: 'Modern Indian', desc: 'Tradition meets trend', popular: 'Most loved' },
        { label: 'Boho Chic', desc: 'Free spirit, curated chaos', popular: 'Instagram fav' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236D4432' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
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
            Choose Your 
            <span className="text-primary"> Design Journey</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            No decision paralysis. Just pick what matters most to you, and we'll guide you to your perfect designer match.
          </p>
        </motion.div>

        {/* Entry Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {entryPoints.map((point, index) => {
            const IconComponent = point.icon;
            const isSelected = selectedPath === point.id;
            
            return (
              <motion.div
                key={point.id}
                className={`relative p-8 rounded-2xl backdrop-blur-sm border-2 cursor-pointer transition-all duration-300 hover:scale-105 group ${
                  isSelected 
                    ? 'bg-primary/10 border-primary shadow-2xl' 
                    : 'bg-white/80 border-gray-200 hover:border-primary/50 hover:shadow-lg'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedPath(isSelected ? null : point.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
                  <img 
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    } transition-colors duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {point.title}
                      </h3>
                      <p className="text-text-muted text-sm">{point.subtitle}</p>
                    </div>
                  </div>

                  {/* Options (show when expanded) */}
                  <motion.div
                    initial={false}
                    animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mb-6">
                      {point.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground text-sm">{option.label}</h4>
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              {option.popular}
                            </span>
                          </div>
                          <p className="text-text-muted text-sm">{option.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                        : 'bg-primary/5 text-primary hover:bg-primary hover:text-white border border-primary/20 hover:border-primary'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSelected ? 'Start This Journey' : 'Start Here'}
                  </motion.button>

                  {/* Smart Suggestions */}
                  {isSelected && (
                    <motion.div 
                      className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-xs text-primary font-medium">
                        💡 Based on your location: 127 people in your city chose this path last month
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-text-muted mb-6">
            Can't decide? Take our quick 2-minute quiz to find your perfect design path.
          </p>
          <button className="bg-primary-border hover:bg-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Take Design Quiz
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EntryPointsSection;