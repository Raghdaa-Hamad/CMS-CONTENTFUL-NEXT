import Link from "next/link";
import CoverImage from "./cover-image";
import HoverImage from "./hover-image";




function ProductPreview({
  name,
  description,
  price,
  quantity,
  image,
  hoverImage,
  slug
}: {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: any;
  hoverImage: any;
  slug: string;
}) {
  return (
   
      
        <div className="container px-5">
          <div className="relative bg-white border-none rounded overflow-hidden">
            <div className="aspect-w-1 h-80 relative overflow-hidden">
              <div className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0">
                <CoverImage name={name} slug={slug} url={image} />
              </div>
              <div className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 absolute inset-0">
                <HoverImage name={name} slug={slug} hoverUrl={hoverImage} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm font-light text-gray-500">${price}</p>
            </div>
          </div>
        </div>
      
  );
}

export default function NewArrivals({ category }: { category: any }) {
  const products = category?.productCollection?.items ?? [];

  return (
    <div>
      <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
        New Arrival
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
           <Link  href={`/products/${product.slug}`}>
            
          <ProductPreview
            key={product.slug}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            image={product.image.url}
            hoverImage={product.hoverImage.url}
            slug={product.slug}
          />
         
          </Link>
        ))}
      </div>
    </div>
  );
}