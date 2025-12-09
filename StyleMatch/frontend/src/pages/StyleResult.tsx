import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { styleImages, StyleType } from "../data/styleImages";
import imgImage from "figma:asset/9b92834dba5db2760928a8f3f665c5a65b4b8020.png";

const styleDescriptions = {
  clean: {
    title: "클린 캐주얼",
    subtitle: "Clean & Minimal",
    tagline: "절제된 아름다움 속에서 완성되는 시그니처",
    description: "Less is More. 불필요한 요소를 제거하고 본질에 집중하는 철학이 담긴 스타일입니다. 깔끔한 라인과 절제된 컬러, 완벽한 핏으로 세련미를 표현합니다.",
    philosophy: "패션은 언제나 간결함에서 시작됩니다. 클린 스타일은 단순히 심플한 것이 아닌, 불필요함을 덜어낸 본질의 아름다움을 추구합니다. 완벽한 핏과 고급스러운 소재, 절제된 컬러 팔레트로 시간이 지나도 변하지 않는 가치를 만듭니다.",
    items: "베이직 셔츠 / 테일러드 팬츠 / 미니멀 스니커즈 / 심플 토트백",
    coordination: "화이트 옥스포드 셔츠에 베이지 치노 팬츠를 매치하고, 화이트 레더 스니커즈로 마무리. 실버 시계와 심플한 토트백으로 포인트를 줍니다.",
    mood: "Sophisticated / Timeless / Refined",
    palette: "White / Beige / Navy / Grey",
  },
  trendy: {
    title: "트렌디 스트릿",
    subtitle: "Urban & Dynamic",
    tagline: "도시의 에너지를 담은 자유로운 표현",
    description: "스트릿 컬처에서 영감을 받아 트렌드를 재해석합니다. 과감한 실루엣과 레이어링, 믹스매치를 통해 자신만의 개성을 표현하는 스타일입니다.",
    philosophy: "거리는 가장 자유로운 런웨이입니다. 트렌디 스트릿 스타일은 끊임없이 진화하는 도시 문화를 반영하며, 규칙을 벗어난 창의적 조합으로 자신만의 이야기를 만듭니다. 오버사이즈 핏과 대담한 그래픽, 레이어드 기법으로 역동적인 무드를 연출합니다.",
    items: "오버사이즈 후디 / 와이드 카고 팬츠 / 하이탑 스니커즈 / 크로스백",
    coordination: "그래픽 후디에 블랙 카고 팬츠를 레이어드하고, 컬러풀한 스니커즈로 포인트. 볼캡과 크로스백으로 스트릿 무드를 완성합니다.",
    mood: "Urban / Dynamic / Bold",
    palette: "Black / Olive / Orange / White",
  },
  formal: {
    title: "포멀 클래식",
    subtitle: "Classic & Elegant",
    tagline: "시간이 증명한 우아함과 품격",
    description: "전통적인 테일러링 기법과 클래식한 실루엣으로 완성하는 격식미. 디테일에 대한 섬세한 배려가 돋보이는 정통 스타일입니다.",
    philosophy: "진정한 클래식은 유행을 초월합니다. 포멀 스타일은 오랜 시간 검증된 실루엣과 정교한 테일러링으로 완성됩니다. 고급 소재의 선택, 완벽한 비율, 디테일에 대한 집착이 만들어내는 우아함은 어떤 상황에서도 품격을 잃지 않습니다.",
    items: "울 블레이저 / 슬림 슬랙스 / 옥스포드 슈즈 / 레더 브리프케이스",
    coordination: "네이비 블레이저에 그레이 슬랙스, 화이트 드레스 셔츠를 조합. 다크 브라운 옥스포드 슈즈와 타이로 클래식한 우아함을 연출합니다.",
    mood: "Elegant / Professional / Classic",
    palette: "Navy / Charcoal / Burgundy / Ivory",
  },
  unique: {
    title: "유니크 아트",
    subtitle: "Artistic & Avant-garde",
    tagline: "예술적 감성으로 완성하는 패션 언어",
    description: "기존의 틀을 벗어나 창의적인 조합과 실험적인 스타일링을 추구합니다. 예술작품처럼 독창적이고 개성 넘치는 스타일을 완성합니다.",
    philosophy: "패션은 또 하나의 예술입니다. 유니크 아트 스타일은 전통적 규칙에서 벗어나 자유로운 상상력을 구현합니다. 예상치 못한 컬러 조합, 독특한 패턴, 아방가르드한 실루엣으로 자신만의 예술작품을 완성하며, 입는 사람의 창의성과 개성을 온전히 표현합니다.",
    items: "아트 프린트 셔츠 / 와이드 린넨 팬츠 / 유니크 디자이너 슈즈 / 빈티지 백",
    coordination: "추상 패턴 셔츠에 아이보리 린넨 팬츠를 매치하고, 독특한 디자인의 슈즈로 포인트. 빈티지 레더백과 아티스틱 액세서리로 완성합니다.",
    mood: "Creative / Artistic / Avant-garde",
    palette: "Mustard / Emerald / Terracotta / Cream",
  },
};

export default function StyleResult() {
  const location = useLocation();
  const { selectedStyle, votes } = location.state as { selectedStyle: StyleType; votes: Record<StyleType, number> } || { selectedStyle: "clean", votes: {} };
  
  const [currentLookbookIndex, setCurrentLookbookIndex] = useState(0);
  const styleInfo = styleDescriptions[selectedStyle];
  const lookbookImages = styleImages[selectedStyle] || styleImages.clean;

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
          <ImageWithFallback 
            src={lookbookImages[0]} 
            alt={styleInfo.title}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          />
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
                  Style Analysis — Example {selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)}
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
                  {styleInfo.description}
                </p>
              </div>

              {/* Philosophy */}
              <div className="border-t border-[#e6e6e6] pt-[32px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[0.1em] text-black uppercase mb-[16px]">
                  Philosophy
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
                  Styling Guide
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
              <ImageWithFallback 
                src={imgImage}
                alt="Style detail"
                className="absolute w-full h-full object-cover rounded-[8px]" 
              />
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