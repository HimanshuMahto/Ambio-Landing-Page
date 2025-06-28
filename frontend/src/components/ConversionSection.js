import React, { useState } from 'react';
import {
  CheckCircle,
  Shield,
  Users,
  MapPin,
  Sparkles,
  Calendar,
  Heart,
  Palette,
  ChevronDown,
} from 'lucide-react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    styles: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const cities = [
    'Indore', 'Bhopal', 'Nagpur', 'Pune', 'Ahmedabad', 'Surat',
    'Vadodara', 'Nashik', 'Aurangabad', 'Solapur', 'Dhule', 'Amravati',
    'Ujjain', 'Ratlam', 'Dewas', 'Gwalior', 'Jabalpur',
  ];

  const stylePreferences = [
    'Maharashtrian Traditional', 'Gujarati Heritage', 'Modern Minimalist',
    'Indo-Contemporary', 'Rajasthani Royal', 'Scandinavian Clean',
    'Boho Fusion', 'Industrial Chic', 'Coastal Modern', 'Urban Loft',
    'Ethnic Fusion', 'Art Deco Revival',
  ];

  const handleStyleToggle = (style) => {
    setFormData((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.city) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23f0f0f0&quot; fill-opacity=&quot;0.4&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto transform transition-all duration-1000 ease-out opacity-100 translate-y-0">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              You're on the List! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to the exclusive AMBIO waitlist! We're curating the perfect design experience for {formData.city}.
            </p>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">What's Next?</h3>
              </div>
              <div className="space-y-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold flex items-center justify-center mr-4 mt-1 shadow-md">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Early Access Invitation</h4>
                    <p className="text-gray-600 text-sm">You'll receive exclusive early access 2 weeks before public launch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold flex items-center justify-center mr-4 mt-1 shadow-md">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Premium Designer Network</h4>
                    <p className="text-gray-600 text-sm">Access to our curated network of top designers in {formData.city}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold flex items-center justify-center mr-4 mt-1 shadow-md">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Exclusive Launch Offer</h4>
                    <p className="text-gray-600 text-sm">Special pricing and free consultation worth ₹5,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <p className="text-purple-700 text-sm font-medium">
                  💝 Waitlist Position: #{Math.floor(Math.random() * 500) + 100} | Expected Launch: March 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23f0f0f0&quot; fill-opacity=&quot;0.4&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-700">Coming Soon to Your City</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Join the Waitlist
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience India's most exclusive interior design platform.{' '}
            <span className="font-semibold text-purple-700"> Launching March 2025.</span>
          </p>
          <div className="flex justify-center items-center mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-white/50">
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-6">
                  <img className="w-10 h-10 rounded-full border-3 border-white shadow-md" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400" alt="User" />
                  <img className="w-10 h-10 rounded-full border-3 border-white shadow-md" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400" alt="User" />
                  <img className="w-10 h-10 rounded-full border-3 border-white shadow-md" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="User" />
                  <div className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-bold text-gray-800">1,247 joined this week</span>
                  </div>
                  <p className="text-sm text-gray-500">From across Maharashtra & Gujarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50"
          >
            <div className="text-center mb-8">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Secure Your Spot</h2>
              <p className="text-gray-600">Join thousands waiting for the future of home design</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 bg-white/80 backdrop-blur-sm shadow-inner text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

                <div className="space-y-2 relative">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                    Your City
                  </label>

                  <div className="relative">
                    <select
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, city: e.target.value }))
                      }
                      className="w-full appearance-none px-6 py-4 pr-12 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 text-gray-800 bg-white/80 backdrop-blur-sm shadow-inner text-lg"
                    >
                      <option value="">Select your city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500 pointer-events-none" />
                  </div>
                </div>


              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-purple-600" />
                  Design Styles You Love (Optional)
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {stylePreferences.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleStyleToggle(style)}
                      className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                        formData.styles.includes(style)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Select styles that resonate with you - this helps us match you with the right designers
                </p>
              </div>

              <button
                type="submit"
                disabled={!formData.email || !formData.city}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-6 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl transform hover:scale-105 active:scale-95"
              >
                {!formData.email || !formData.city ? 'Fill Details Above' : 'Join the Waitlist'}
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Early Access</span>
                  <span className="text-xs text-gray-500">2 weeks before launch</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-6 h-6 text-blue-500 mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Exclusive Pricing</span>
                  <span className="text-xs text-gray-500">Special launch offers</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Sparkles className="w-6 h-6 text-purple-500 mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Premium Network</span>
                  <span className="text-xs text-gray-500">Curated designers only</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
