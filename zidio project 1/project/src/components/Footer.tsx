import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-4xl font-bold">
                <span className="text-yellow-400 font-serif">ZIDIO</span>
                <span className="ml-2">
                  {/* Each letter styled as different superhero/anime character */}
                  <span className="text-blue-500 font-bold text-2xl" style={{fontFamily: 'Impact'}} title="Captain America">C</span>
                  <span className="text-red-500 font-extrabold text-2xl italic" style={{fontFamily: 'Comic Sans MS'}} title="Luffy">L</span>
                  <span className="text-cyan-400 font-bold text-2xl" style={{fontFamily: 'Roboto', transform: 'rotate(-5deg)', display: 'inline-block'}} title="Optimus Prime">O</span>
                  <span className="text-blue-600 font-bold text-2xl" style={{fontFamily: 'Arial Black', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}} title="Thor">T</span>
                  <span className="text-green-500 font-black text-2xl" style={{fontFamily: 'Impact', letterSpacing: '2px'}} title="Hulk">H</span>
                  <span className="text-red-600 font-bold text-2xl" style={{fontFamily: 'Futura', background: 'linear-gradient(45deg, #ff6b6b, #feca57)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} title="Iron Man">I</span>
                  <span className="text-orange-500 font-bold text-2xl italic" style={{fontFamily: 'Brush Script MT'}} title="Naruto">N</span>
                  <span className="text-orange-400 font-extrabold text-2xl" style={{fontFamily: 'Impact', transform: 'scale(1.2)', display: 'inline-block'}} title="Goku">G</span>
                  <span className="text-blue-700 font-bold text-2xl" style={{fontFamily: 'Times New Roman', textDecoration: 'underline'}} title="Superman">S</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium superhero and anime t-shirts that bring your favorite characters to life. Unleash your inner hero with our exclusive designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-400">support@zidioclothings.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-400">123 Hero Street, Comic City</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ZIDIO Clothings. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;