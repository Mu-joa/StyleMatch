import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const brands = [
  {
    id: 1,
    name: "MINIMALIST STUDIO",
    category: "Contemporary",
    image: "https://images.unsplash.com/photo-1672191265955-148f2058c389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGJyYW5kJTIwc3RvcmV8ZW58MXx8fHwxNzY0MDQ2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "URBAN BASICS",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1598795737563-07467e744bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjByYWNrfGVufDF8fHx8MTc2NDA0NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "ATELIER MODERNE",
    category: "Designer",
    image: "https://images.unsplash.com/photo-1645055752527-873bf0d6c593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0MDQ2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "CLEAN LINE",
    category: "Contemporary",
    image: "https://images.unsplash.com/photo-1556630184-066f7ac4e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsZWFuJTIwc3R5bGV8ZW58MXx8fHwxNzY0MTU1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function BrandRecommend() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="bg-white relative min-h-screen w-full" data-name="Brand Recommend">
      <Navigation />
      
      <div className="max-w-[900px] mx-auto px-[40px]">
        {/* Brands grid */}
        <div className="relative pt-[140px] pb-[80px]">
          <div className="flex flex-col gap-[24px]">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="relative overflow-hidden rounded-[8px] h-[500px] cursor-pointer transition-opacity hover:opacity-80"
                onMouseEnter={() => setHoveredId(brand.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredId === brand.id ? 1 : 0.7,
                  }}
                />
                <div className="absolute bottom-[40px] left-[40px] right-[40px] text-white">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[32px] tracking-[-0.64px] mb-[8px]">
                    {brand.name}
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif] text-[16px] text-white/80">
                    {brand.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}