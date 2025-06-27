import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-800">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 bg-black/70 rounded-full text-white hover:bg-red-500 transition-colors duration-300">
          <Heart className="h-5 w-5" />
        </button>

        {/* Quick Add to Cart */}
        <button className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
          product.category === 'Marvel' ? 'bg-red-500/20 text-red-400' :
          product.category === 'DC' ? 'bg-blue-500/20 text-blue-400' :
          'bg-purple-500/20 text-purple-400'
        }`}>
          {product.category}
        </span>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-white mb-2 hover:text-yellow-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-400">₹{product.price}</span>
            <span className="text-gray-500 line-through text-sm">₹{Math.floor(product.price * 1.3)}</span>
          </div>
          <span className="text-green-400 text-sm font-semibold">23% OFF</span>
        </div>

        {/* Available Sizes */}
        <div className="mt-4">
          <p className="text-gray-400 text-sm mb-2">Available Sizes:</p>
          <div className="flex gap-2">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700">
                +{product.sizes.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;