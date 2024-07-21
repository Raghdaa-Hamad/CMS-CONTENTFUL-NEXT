'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider({ allCategories }: { allCategories: any[] }): JSX.Element {
  const images = allCategories.map((category) => category.image.url);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full mt-0">
      <div className="relative w-full h-[460px]">
        <Image
          loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality}`}
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out cursor-pointer"
          unoptimized={true}
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-[#beff46]' : 'bg-gray-300'
            } transition-all duration-500 ease-in-out`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
