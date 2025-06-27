import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Starry Night Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, #1e3a8a 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, #059669 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, #dc2626 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
            `
          }}
        />
        
        {/* Animated swirls */}
        <div className="absolute inset-0">
          <div className="animate-spin-slow absolute top-20 left-20 w-32 h-32 border-4 border-yellow-400 border-dashed rounded-full opacity-20"></div>
          <div className="animate-bounce absolute top-40 right-32 w-16 h-16 bg-blue-500 rounded-full opacity-30"></div>
          <div className="animate-pulse absolute bottom-32 left-40 w-24 h-24 bg-purple-500 rounded-full opacity-25"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            UNLEASH YOUR
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400">
            INNER HERO
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Premium superhero and anime t-shirts that bring your favorite characters to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/products"
              className="group bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2"
            >
              Shop T-Shirts Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Explore Categories
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Choose Your <span className="text-yellow-400">Universe</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Marvel */}
            <div className="group relative bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
              <Shield className="w-16 h-16 text-white mb-4 group-hover:animate-bounce" />
              <h3 className="text-3xl font-bold text-white mb-4">Marvel</h3>
              <p className="text-red-100 mb-6">Assemble with the Avengers! Iron Man, Captain America, Spider-Man and more.</p>
              <div className="flex items-center text-white font-semibold">
                <span>Explore Marvel T-Shirts</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* DC */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
              <Zap className="w-16 h-16 text-white mb-4 group-hover:animate-bounce" />
              <h3 className="text-3xl font-bold text-white mb-4">DC</h3>
              <p className="text-blue-100 mb-6">Join the Justice League! Batman, Superman, Wonder Woman designs.</p>
              <div className="flex items-center text-white font-semibold">
                <span>Explore DC T-Shirts</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Anime */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
              <Star className="w-16 h-16 text-white mb-4 group-hover:animate-bounce" />
              <h3 className="text-3xl font-bold text-white mb-4">Anime</h3>
              <p className="text-purple-100 mb-6">Power up with anime legends! Naruto, Goku, Luffy and more.</p>
              <div className="flex items-center text-white font-semibold">
                <span>Explore Anime T-Shirts</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="text-yellow-400">T-Shirts</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View All T-Shirts
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-yellow-400">Hero Squad</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive access to new designs, special discounts, and superhero updates!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;