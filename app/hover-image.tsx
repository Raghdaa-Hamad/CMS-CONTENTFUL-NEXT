import ContentfulImage from "@/lib/contentful-image";


function HoverImage({
  name,
  slug,
  
  hoverUrl
}: {
  name: string;
  slug: string;
 
  hoverUrl: string;
}) 
  {
    const hoverImage = (
      <ContentfulImage
        alt={`Cover Image for ${name}`}
        priority
        width={800}
        height={700}
        
        src={hoverUrl}
      />
    );
  return (
    
    <div className="sm:mx-0">
     
      {hoverImage}
    </div>
       
  );
}

export default HoverImage;