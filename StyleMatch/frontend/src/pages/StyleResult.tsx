import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import type { StyleType } from "../types/style";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";


const styleDescriptions = {
  clean: {
  title: "깔끔함",
  subtitle: "Casual & Minimal",
  tagline: "#캐주얼 #미니멀 #꾸안꾸 #깔끔 #데일리룩 #심플",
  description:
  "깔끔함은 ‘잘 꾸민 느낌’보다 ‘안정된 느낌’을 먼저 만듭니다. 튀는 요소 없이 색감과 핏이 자연스럽게 어우러지고, 전체적으로 안정적이고 편안한 분위기를 줍니다. 패션을 잘 몰라도 실패할 확률이 가장 적은 스타일입니다.",
  philosophy:
  "패션은 더하는 것보다 덜어내는 선택에서 완성됩니다. 과한 디테일 대신, 기본과 균형을 중요하게 생각합니다. 일상에서 가장 자주 입을 수 있으면서도 상대에게 안정적인 인상을 주는 선택이 이 스타일의 핵심입니다..",
  items: "티셔츠      /     데님 팬츠 or 치노 팬츠      /     스니커즈      /     가벼운 백",
  coordination:
  "모든 아이템을 심플하게 맞출 필요는 없습니다. 하나만 정리해도 충분히 깔끔한 인상을 줄 수 있습니다. 색상 수를 줄이면 실패 확률이 적어집니다.",
  mood:"평상시 외출 / 친구 만남 / 집 앞 카페",
  palette:
    "White, Beige / Navy, Grey / Black",
  },
  trendy: {
    title: "트렌디",
    subtitle: "Treandy & Street",
    tagline: "#트렌디 #스트릿 #스포티 #요즘패션 #MZ",
    description: "스트릿 컬처에서 영감을 받아 트렌드를 재해석합니다. 전체적으로 유행을 빨리 반영하고 자신만의 개성을 표현하기 좋은 스타일 입니다. 과감한 실루엣과 레이어링, 믹스매치를 통해 나타냅니다.",
    philosophy: "패션은 흐름을 읽는 감각입니다. 완벽함보다 현재의 분위기를 가볍게 즐기는 태도를 중요하게 여깁니다. 유행을 전부 따르기보다, 나에게 맞는 요소만 선택하는 것이 핵심입니다.",
    items: "오버핏 상의     /     카고 팬츠     /     운동화      /     볼캡      /     은 or 금 악세서리",
    coordination: "모든 아이템을 트렌디하게 맞출 필요는 없습니다. 기본 코디에 스트릿하거나 스포티한 요소 하나만 더해도 충분히 요즘 느낌을 낼 수 있습니다.",
    mood: "사진 찍는 날 / 친구랑 놀러 / 번화가 외출",
    palette: "Black, Grey / White / Red, Neon",
  },
  formal: {
    title: "단정함",
    subtitle: "Formal & Classic",
    tagline: "#단정 #포멀 #세미포멀 #오피스룩",
    description: "단정함은 옷이 먼저 보이기보다 사람 자체가 신뢰감 있게 보이도록 돕습니다. 정리된 실루엣과 안정적인 색감이 중심이 되어, 중요한 자리에서도 무난하게 어울립니다.",
    philosophy: "단정함은 상황을 고려하는 태도입니다. 과하지 않으면서도 예의를 갖춘 인상을 주는 것이 이 스타일의 목적이며, 말하지 않아도 안정감을 전달하는 옷차림을 추구합니다.",
    items: "셔츠      /     슬랙스      /     로퍼 or 더비 슈즈     /     구조감 있는 아우터      /     안경      /     시계",
    coordination: "항상 정장을 입을 필요는 없습니다. 셔츠와 슬랙스만으로도 충분히 단정한 인상을 만들 수 있으며, 캐주얼 아이템 하나를 섞으면 세미포멀로도 활용할 수 있습니다.",
    mood: "상견례 / 중요한 미팅 / 격식 있는 모임",
    palette: "Navy, Charcoal / White / Brown",
  },
  unique: {
    title: "특별함",
    subtitle: "Unique & Creative",
    tagline: "#개성 #아메카지 #밀리터리 #빈티지 #취향존중",
    description: "기존의 틀을 벗어나 창의적인 조합과 실험적인 스타일링을 추구합니다. 예술작품처럼 독창적이고 개성 넘치는 스타일을 완성합니다. 전체적인 인상에서 '그 사람만의 느낌’이 남는 것이 특징입니다.",
    philosophy: "패션은 또 하나의 예술입니다. 전통적 규칙에서 벗어나 자유로운 상상력을 구현합니다. 예상치 못한 컬러 조합, 독특한 패턴, 아방가르드한 실루엣으로 자신만의 예술작품을 완성하며, 입는 사람의 창의성과 개성을 온전히 표현합니다.",
    items: "워크웨어 상의     /     실루엣이 강조된 팬츠      /     포인트 슈즈      /      개성있는 악세서리",
    coordination: "모든 아이템을 강하게 가져갈 필요는 없습니다. 한 가지 요소만 분명해도 충분히 개성이 드러납니다. 정답보다는 본인의 취향을 기준으로 조합해도 괜찮습니다.",
    mood: "취향 드러내고 싶은 날 / 혼자 튀고 싶을 때 / 여행",
    palette: "Black, Cream / Olive / Mustard",
  },
};

export default function StyleResult() {
  const location = useLocation();
  const state = location.state as {
    selectedStyle?: StyleType;
    votes?: Record<StyleType, number>;
  } | null;

  const selectedStyle: StyleType = state?.selectedStyle ?? "clean";
  const styleInfo = styleDescriptions[selectedStyle];

  // ✅ 추가된 상태
  const [currentLookbookIndex, setCurrentLookbookIndex] = useState(0);
  const [heroImage, setHeroImage] = useState<string | null>(null);
const [lookbookImages, setLookbookImages] = useState<string[]>([]);
const [detailImage, setDetailImage] = useState<string | null>(null);

  // ✅ 결과 이미지 백엔드 연동
  const API_BASE = "http://localhost:5000";
  useEffect(() => {
  fetch(`${API_BASE}/result_images/${selectedStyle}`)
    .then(res => res.json())
    .then(data => {
      setHeroImage(API_BASE + data.hero);
      setLookbookImages(
  data.lookbook.map((img: string) => API_BASE + img)
);
      setDetailImage(API_BASE + data.detail);
    });
}, [selectedStyle]);
  // Scroll-based lookbook navigation
  useEffect(() => {
    const handleScroll = () => {
      const lookbookSection = document.getElementById('lookbook-section');
      if (!lookbookSection) return;

      const rect = lookbookSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate which image should be shown based on scroll position
      if (sectionTop <= windowHeight && sectionTop > -windowHeight * lookbookImages.length) {
        const scrollProgress = Math.max(0, windowHeight - sectionTop) / windowHeight;
        const imageIndex = Math.min(
          Math.floor(scrollProgress),
          lookbookImages.length - 1
        );
        setCurrentLookbookIndex(imageIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lookbookImages.length]);

  return (
    <div className="bg-white relative min-h-screen w-full" data-name="Style Result">
      <Navigation />
      
      <div className="max-w-[900px] mx-auto">
        {/* Hero Image */}
        <div className="relative h-[900px] overflow-clip mt-[80px] w-full">
          {heroImage && (
  <ImageWithFallback 
    src={heroImage}
    alt={styleInfo.title}
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />
)}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-[60px] left-[40px] right-[40px]">
            <p className="font-['Pretendard:Light',sans-serif] text-[12px] tracking-[0.15em] text-white/80 uppercase mb-[12px]">
              {styleInfo.subtitle}
            </p>
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] text-[32px] text-white tracking-[-0.64px] mb-[16px]">
              {styleInfo.title}
            </p>
            <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] text-[16px] text-white/90 max-w-[600px]">
              {styleInfo.tagline}
            </p>
          </div>
        </div>

        {/* Comment section */}
        <div className="relative bg-white py-[80px] px-[40px] w-full overflow-clip">
          <div className="max-w-[700px] mx-auto">
            <div className="flex flex-col gap-[40px]">
              {/* Intro */}
              <div>
                <p className="font-['Pretendard:Light',sans-serif] text-[12px] tracking-[0.2em] text-[rgba(0,0,0,0.4)] uppercase mb-[16px]">
                  Descriprion {selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)}
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
                  {styleInfo.description}
                </p>
              </div>

              {/* Philosophy */}
              <div className="border-t border-[#e6e6e6] pt-[32px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[16px]">
                  Style Point
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
                  {styleInfo.philosophy}
                </p>
              </div>

              {/* Key Items */}
              <div className="border-t border-[#e6e6e6] pt-[32px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[16px]">
                  Key Items
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
                  {styleInfo.items}
                </p>
              </div>

              {/* Coordination */}
              <div className="border-t border-[#e6e6e6] pt-[32px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[16px]">
                  Guide
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
                  {styleInfo.coordination}
                </p>
              </div>

              {/* Mood & Palette */}
              <div className="border-t border-[#e6e6e6] pt-[32px]">
                <div className="grid grid-cols-2 gap-[32px]">
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[12px]">
                      Mood
                    </p>
                    <p className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[1.6] text-[rgba(0,0,0,0.6)]">
                      {styleInfo.mood}
                    </p>
                  </div>
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[12px]">
                      Color Palette
                    </p>
                    <p className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[1.6] text-[rgba(0,0,0,0.6)]">
                      {styleInfo.palette}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Style section */}
        <div className="relative px-[40px] pb-[80px] overflow-clip">
          <div className="relative h-[1200px] rounded-[8px] w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
              {detailImage && (
  <ImageWithFallback 
    src={detailImage}
    alt={`${styleInfo.title} detail`}
    className="absolute w-full h-full object-cover rounded-[8px]" 
  />
)}
            </div>
          </div>
        </div>
      </div>

      {/* LookBook - Scroll-based, fixed to screen */}
      <div 
        id="lookbook-section"
        className="relative w-full"
        style={{ height: `${lookbookImages.length * 100}vh` }}
      >
        <div className="sticky top-0 w-full h-screen bg-black overflow-hidden">
          {lookbookImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: currentLookbookIndex === index ? 1 : 0
              }}
            >
              <ImageWithFallback 
                src={img}
                alt={`Lookbook ${index + 1}`}
                className="w-full h-full object-cover" 
              />
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex gap-[12px]">
            {lookbookImages.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentLookbookIndex 
                    ? 'w-[40px] h-[8px] bg-white' 
                    : 'w-[8px] h-[8px] bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}