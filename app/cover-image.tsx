import ContentfulImage from "@/lib/contentful-image";


function CoverImage({
  name,
  slug,
  url,
}: {
  name: string;
  slug: string;
  url: string;
  
}) 
  {
    const image = (
      <ContentfulImage
        alt={`Cover Image for ${name}`}
        priority
        width={800}
        height={700}
        src={url}
      />
    );
 


  
  return (
    
    <div className="sm:mx-0">
     
      {image}
    </div>
   
    
   
  );
}

export default CoverImage;