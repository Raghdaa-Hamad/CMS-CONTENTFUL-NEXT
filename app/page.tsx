import Link from "next/link";
import { draftMode } from "next/headers";
import ImageSlider from "./components/image-slider";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import NewArrivals from "./more-stories";
import {getAllProducts} from "@/lib/api"



import { getAllCategories ,getLatesCategories , getAllProductsInCategory } from "@/lib/api";



function Categories({
  categories,
}: {
  categories: {
    title: string;
    slug: string;
    image: any;
  }[];
}) {
  return (
    <section className="container px-3 grid lg:grid-cols-4 lg:grid-rows-2 gap-9 mb-10 pt-10">
    {categories.slice(0, 4).map((category, index) => (
      <div
        key={category.slug}
        className={`
          ${index === 0 ? 'lg:col-start-1 lg:row-start-1 lg:row-span-2' : ''}
          ${index === 1 ? 'lg:col-start-2 lg:col-span-2 lg:row-start-1' : ''}
          ${index === 2 ? 'lg:col-start-2 lg:col-span-2 lg:row-start-2' : ''}
          ${index === 3 ? 'lg:col-start-4 lg:row-start-1 lg:row-span-2' : ''}
          relative overflow-hidden
        `}
      >
        <Link href={`/categories/${category.slug}`}>
          <img
            src={category.image.url}
            alt={category.title}
            className="h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Link>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black text-center px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white  shadow-md">
        {category.title}
      </div>
      </div>
    ))}
  </section>


  
  
  );
}





export default async function Page() {
  const { isEnabled } = draftMode();
  const allCategories = await getAllCategories();
  const latestCategories = await getLatesCategories();


const products = await getAllProducts();
console.log("product" , products)


 
const newArrivalCategory = allCategories.find((category)=>category.title === "New Arrivals")

 

  
  

  return (
    <div >
   
      <ImageSlider allCategories={allCategories} />
      <Categories categories={latestCategories} />
      <NewArrivals category={newArrivalCategory} />
     
      
     
     
    </div>
  );
}