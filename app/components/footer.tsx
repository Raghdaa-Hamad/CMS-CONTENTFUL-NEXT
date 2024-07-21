import React from 'react';

export default function Footer() {
    return (
<footer className="bg-gray-100 text-black-700 py-20 relative">
  <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">

    <div className="w-full sm:w-1/5 mb-8 sm:mb-0">
      <h3 className="text-black text-3xl font-extrabold mb-4">My Website</h3>
      <ul className="details-list sm:hidden">
        <li className="flex items-center mb-2">
          <a href="#" className="text-gray-400 hover:text-blue-300">Address</a>
        </li>
        <li className="flex items-center mb-2">
          <a href="#" className="text-gray-400 hover:text-blue-300">contact@com.com</a>
        </li>
        <li className="flex items-center mb-2">
          <a href="#" className="text-gray-400 hover:text-blue-300">45690-754</a>
        </li>
      </ul>
    </div>

    <div className="w-full sm:w-1/5 mb-8 sm:mb-0">
      <h3 className="text-black text-xl mb-4 cursor-pointer">Categories</h3>
      <ul className="details-list hidden sm:block">
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Fashion</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Headphones</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Home</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Grocery</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Laptops</a></li>
      </ul>
    </div>

    <div className="w-full sm:w-1/5 mb-8 sm:mb-0">
      <h3 className="text-black text-xl mb-4 cursor-pointer">Information</h3>
      <ul className="details-list hidden sm:block">
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">About us</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Contact Us</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Terms & conditions</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Returns & Exchange</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Shipping & Delivery</a></li>
      </ul>
    </div>

    <div className="w-full sm:w-1/5 mb-8 sm:mb-0">
      <h3 className="text-black text-xl mb-7 cursor-pointer">Useful Links</h3>
      <ul className="details-list hidden sm:block">
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Latest News</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">My Account</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">Size Guide</a></li>
        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-300">FAQ</a></li>
      </ul>
    </div>

    <div className="w-full sm:w-1/5 mb-8 sm:mb-0">
      <h3 className="text-gray-900 text-xl mb-4 font-semibold cursor-pointer">Newsletter Sign UP</h3>
      <span className="block mt-4 text-sm text-gray-400">Subscribe to our newsletter and get 10% off your first purchase</span>
      <div className="relative mt-4">
        <input type="email" className="w-full px-4 py-3 text-gray-900 border border-black rounded-full" placeholder="Enter your email"/>
        <button type="submit" className="absolute inset-y-1 right-1 bg-black text-white p-3 pr-3 rounded-full text-sm font-semibold flex items-center justify-center">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  <div className="mt-4 text-left text-gray-500 bg-white w-full py-3 absolute bottom-0 left-0">
    <div className="max-w-7xl mx-auto px-4">
      <p>&copy; 2024 My website. All rights reserved.</p>
    </div>
  </div>
</footer>


  

      );
    };
