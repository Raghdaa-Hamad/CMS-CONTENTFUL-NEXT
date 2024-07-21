import Link from 'next/link';
import React from 'react';
import { HiOutlineHeart ,HiOutlineSearch ,HiOutlineUser ,HiOutlineShoppingCart } from "react-icons/hi";

export default function Header() {
    return (
      
     
      <header className="bg-white border-b border-gray-200 ">
        
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <a href="/" className="font-arial text-3xl font-extrabold text-gray-800">Kalles</a>
        </div>
        
      
        <div className="flex-grow flex justify-center font-sans">
          <nav className="flex justify-center items-center space-x-4 sm:space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-300 py-2 sm:py-0">Home</a>
            
  <a href="/categorieslist" className="font-serif text-gray-800 hover:text-blue-300 py-2 sm:py-0">Categories</a>
 
           
            <a href="/shop" className="text-gray-800 hover:text-blue-300 py-2 sm:py-0">New Arrival</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-300 py-2 sm:py-0">Contact</a>
          </nav>
        </div>
        
        {/* Icons Section */}
        <div className="flex flex-row justify-center sm:justify-end items-center space-x-3 mt-3 sm:mt-0">
          <span className="text-3xl text-gray-800 hover:text-blue-300 sm:hidden">
            <HiOutlineSearch />
          </span>
          <span className="text-3xl text-gray-800 hover:text-blue-300 sm:hidden">
            <HiOutlineUser />
          </span>
          
          {/* Icons visible on larger screens */}
          <span className="text-2xl text-gray-800 hover:text-blue-300 hidden sm:inline-block">
            <HiOutlineSearch />
          </span>
          <span className="text-2xl text-gray-800 hover:text-blue-300 hidden sm:inline-block">
            <HiOutlineUser />
          </span>
          <span className="text-2xl text-gray-800 hover:text-blue-300 hidden sm:inline-block">
            <HiOutlineHeart />
          </span>
          <span className="text-2xl text-gray-800 hover:text-blue-300 hidden sm:inline-block">
            <HiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </header>
    

    
          );
        };