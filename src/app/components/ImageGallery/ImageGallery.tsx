import ImageWithLoader from '@/app/features/BlogList/components/ImageWithLoader';
import React, { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

interface ImageGalleryProps {
  images: string[] | undefined;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <div style={{ aspectRatio: "4/3" }}>
        <ImageWithLoader
          style={{ objectFit: 'cover' }}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          fill={true}
          priority={true}
          isLoading={images[currentImageIndex] ? false : true}
        />
      </div>
      
      <button
        onClick={handlePrevious}
        className="bg-white/20 hover:bg-white text-slate-700 rounded-full absolute top-1/2 left-2"
      >
        <MdNavigateBefore size={36} />
      </button>
      
      <button
        onClick={handleNext}
        className="bg-white/20 hover:bg-white text-slate-700 rounded-full absolute top-1/2 right-2"
      >
        <MdNavigateNext size={36} />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
