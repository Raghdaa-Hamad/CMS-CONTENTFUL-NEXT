import Link from "next/link";
import { draftMode } from "next/headers";
import { getAllCategories, getCategory, getAllProductsInCategory } from "@/lib/api";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
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
          <Link href={`/categories/${params.slug}/${pagination.nextPage}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</button>
          </Link>
        </div>
      )}
    </div>
  );
}
