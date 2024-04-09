import React, { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

type GalleryProps = {
  layout: "row" | "grid"; // Prop to determine the layout
};

const Gallery: React.FC<GalleryProps> = ({ layout }) => {
  const images = [
    { src: "/screen1.png", alt: '3" Darwin Baby Ape' },
    { src: "/screen2.png", alt: '5" Armattan Chameleon' },
    { src: "/screen3.png", alt: 'Unknown 5" Build #1' },
    { src: "/screen4.png", alt: 'Unknown 5" Build #2' },
    { src: "/DSC_3724.JPG", alt: "Pilot #1" },
    { src: "/DSC_3726.JPG", alt: "Pilot #2" },
    // Add more images as needed
  ];

  // State for tracking the selected image
  const [selectedImg, setSelectedImg] = useState<Image | null>(null);

  return (
    <div>
      <div className={`gallery ${layout}`}>
        {images
          .slice(0, layout === "row" ? 5 : images.length)
          .map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setSelectedImg(image)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
      </div>
      {selectedImg && (
        <div className="backdrop" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg.src} alt="Enlarged view" />
          <p className="image-description">{selectedImg.alt}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
