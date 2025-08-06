
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryCategoryProps {
  title: string;
  description: string;
  images: string[];
  isReversed?: boolean;
}

const GalleryCategory = ({ title, description, images, isReversed = false }: GalleryCategoryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visibleCount = 3;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentImageIndex + i) % images.length;
      visible.push({ src: images[index], index });
    }
    return visible;
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Text Content */}
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-heading">
            {title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            {currentImageIndex + 1} de {images.length}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="grid grid-cols-3 gap-4">
          {getVisibleImages().map((image, index) => (
            <div
              key={`${image.index}-${index}`}
              className={`relative aspect-square rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                index === 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'
              }`}
            >
              <img
                src={image.src}
                alt={`${title} - Modelo ${image.index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <button
                  onClick={() => setSelectedImage(image.src)}
                  className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Visualizar imagem"
                >
                  <Eye className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Fechar"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 transform rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCategory;
