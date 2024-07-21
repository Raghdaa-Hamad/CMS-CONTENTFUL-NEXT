

import { draftMode } from 'next/headers';
import { getAllCategories, getCategory, getAllProductsInCategory } from '@/lib/api';
import ProductList from './productlist'; 

export async function generateStaticParams() {
  const allCategories = await getAllCategories();
  return allCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const category = await getCategory(params.slug);
  const { products, pagination } = await getAllProductsInCategory(params.slug, isEnabled, { limit: 6 });

  return (
    <div className="container mx-auto px-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{category.title}</h1>
      </div>
      <ProductList initialProducts={products} slug={params.slug} initialPagination={pagination} />
    </div>
  );
}
