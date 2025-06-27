import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-6xl font-bold">
              <span className="text-yellow-400 font-serif">ZIDIO</span>
              <span className="ml-4">
                {/* Each letter styled as different superhero/anime character */}
                <span className="text-blue-500 font-bold text-5xl" style={{fontFamily: 'Impact'}} title="Captain America">C</span>
                <span className="text-red-500 font-extrabold text-5xl italic" style={{fontFamily: 'Comic Sans MS'}} title="Luffy">L</span>
                <span className="text-cyan-400 font-bold text-5xl" style={{fontFamily: 'Roboto', transform: 'rotate(-5deg)', display: 'inline-block'}} title="Optimus Prime">O</span>
                <span className="text-blue-600 font-bold text-5xl" style={{fontFamily: 'Arial Black', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}} title="Thor">T</span>
                <span className="text-green-500 font-black text-5xl" style={{fontFamily: 'Impact', letterSpacing: '2px'}} title="Hulk">H</span>
                <span className="text-red-600 font-bold text-5xl" style={{fontFamily: 'Futura', background: 'linear-gradient(45deg, #ff6b6b, #feca57)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} title="Iron Man">I</span>
                <span className="text-orange-500 font-bold text-5xl italic" style={{fontFamily: 'Brush Script MT'}} title="Naruto">N</span>
                <span className="text-orange-400 font-extrabold text-5xl" style={{fontFamily: 'Impact', transform: 'scale(1.2)', display: 'inline-block'}} title="Goku">G</span>
                <span className="text-blue-700 font-bold text-5xl" style={{fontFamily: 'Times New Roman', textDecoration: 'underline'}} title="Superman">S</span>
              </span>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for T-shirts..."
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-yellow-400 transition-colors font-medium">
              T-Shirts
            </Link>
            <Link to="/login" className="text-white hover:text-yellow-400 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-white hover:text-yellow-400 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search for T-shirts..."
                  className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <Link
                to="/"
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                T-Shirts
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart (3)
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;