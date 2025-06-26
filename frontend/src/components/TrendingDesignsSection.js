import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MapPin, IndianRupee, Eye } from 'lucide-react';

const TrendingDesignsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [savedDesigns, setSavedDesigns] = useState(new Set());

  const toggleSave = (id) => {
    const newSaved = new Set(savedDesigns);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedDesigns(newSaved);
  };

  const designs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8',
      title: 'Minimalist 2BHK in Indore',
      city: 'Indore',
      budget: '4L',
      style: 'Minimal',
      type: '2BHK',
      designer: 'Priya Designs'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa',
      title: 'Boho Living Room Nagpur',
      city: 'Nagpur',
      budget: '2.5L',
      style: 'Boho',
      type: 'LivingRoom',
      designer: 'Urban Interiors'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1592506119503-c0b18879bd5a',
      title: 'Scandinavian Kitchen Bhopal',
      city: 'Bhopal',
      budget: '3L',
      style: 'Scandinavian',
      type: 'Kitchen',
      designer: 'Modern Spaces'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2',
      title: 'Cozy Bedroom Retreat',
      city: 'Indore',
      budget: '1.8L',
      style: 'Contemporary',
      type: 'Bedroom',
      designer: 'Comfort Living'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c',
      title: 'Modern Kitchen Island',
      city: 'Pune',
      budget: '4.5L',
      style: 'Modern',
      type: 'Kitchen',
      designer: 'Elite Designs'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1552558636-f6a8f071c2b3',
      title: 'Zen Bedroom Sanctuary',
      city: 'Bhopal',
      budget: '2.2L',
      style: 'Minimalist',
      type: 'Bedroom',
      designer: 'Tranquil Spaces'
    }
  ];

  const categories = ['All', '2BHK', 'LivingRoom', 'Bedroom', 'Kitchen'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(design => design.type === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236D4432' fill-opacity='0.1'%3E%3Cpolygon points='40 0 80 40 40 80 0 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Trending Designs in 
            <span className="text-primary"> Your City</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Get inspired by real transformations from real Indian homes. Every design, every budget, every dream.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/50 text-foreground hover:bg-white/80 border border-gray-200'
                }`}
              >
                {category === 'All' ? 'All Designs' : category.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Designs Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full font-medium flex items-center hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>

                {/* Save Button */}
                <button
                  onClick={() => toggleSave(design.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart 
                    className={`w-5 h-5 ${savedDesigns.has(design.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{design.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    #{design.style}
                  </span>
                  <span className="bg-primary-border/10 text-primary-border px-3 py-1 rounded-full text-sm font-medium">
                    #{design.type}
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between text-sm text-text-muted mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {design.city}
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {design.budget}
                  </div>
                </div>

                {/* Designer */}
                <p className="text-xs text-text-muted mb-4">by {design.designer}</p>

                {/* CTA Button */}
                <button className="w-full bg-primary/5 hover:bg-primary hover:text-white text-primary font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-primary/20 hover:border-primary">
                  Get This Look
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-white hover:bg-primary hover:text-white text-primary font-semibold px-8 py-4 rounded-xl border-2 border-primary transition-all duration-300 hover:shadow-lg">
            Load More Inspirations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingDesignsSection;