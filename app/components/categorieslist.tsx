"use client"

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

const CategoriesList = ({ categories }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;

  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const currentCategories = categories.slice(
    (currentPage - 1) * categoriesPerPage,
    currentPage * categoriesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <section className="grid lg:grid-cols-3 gap-4 mb-10 pt-10">
        {currentCategories.map((category: any) => (
          <div key={category.slug} className="relative group">
            <Link href={`/categories/${category.slug}`}>
              <img
                src={category.image.url}
                alt={category.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="bg-white hover:bg-black hover:text-white text-center p-2">
              {category.title}
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoriesList;