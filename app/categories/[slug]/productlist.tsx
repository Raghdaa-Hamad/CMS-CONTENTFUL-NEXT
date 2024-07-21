

'use client';

import { useState } from 'react';

import Link from 'next/link';

interface Product {
  id: string;
  slug: string;
  image: { url: string };
  name: string;
  price: string;
}

interface Pagination {
  hasNextPage: boolean;
  nextPage: number;
}

interface ProductListProps {
  initialProducts: Product[];
  slug: string;
  initialPagination: Pagination;
}

export default function ProductList({ initialProducts, slug, initialPagination }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [pagination, setPagination] = useState(initialPagination);

  const loadMoreProducts = async () => {
    if (!pagination.hasNextPage) return;

    const nextPage = pagination.nextPage;
    const response = await fetch(`/api/products?slug=${slug}&page=${nextPage}`);
    const data = await response.json();
    
    setProducts((prevProducts) => [...prevProducts, ...data.products]);
    setPagination(data.pagination);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="block">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-48 object-cover" src={product.image.url} alt={product.name} />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {pagination.hasNextPage && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreProducts}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
