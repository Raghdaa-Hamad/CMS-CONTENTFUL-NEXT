import { getProductBySlug ,getAllProducts} from '@/lib/api';


export async function generateStaticParams() {
    const allProducts = await getAllProducts();

    return allProducts.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string };
}) {
    const product = await getProductBySlug(params.slug);
    

    return (<div className="container mx-auto px-5 py-10">
    <div className="flex flex-col md:flex-row items-start md:items-center">
      <img 
        className="w-full md:w-1/3 rounded-lg shadow-md mb-5 md:mb-0 md:mr-8" 
        src={product.image.url} 
        alt={product.name} 
      />
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-lg font-medium">Quantity: {product.quantity}</p>
      </div>
    </div>
  </div>
);
}