import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, Share2, Check } from "lucide-react";

type GenerationMode = "keyword" | "future";
type Category = "style" | "color" | "season" | "background";

const categoryOptions = {
  style: ["클린", "트렌디", "포멀", "유니크"],
  color: ["컬러풀", "무채색", "파스텔", "다크톤", "비비드"],
  season: ["봄", "여름", "가을", "겨울"],
  background: ["실내", "실외", "도시", "자연", "스튜디오"],
};

const categoryLabels = {
  style: "스타일",
  color: "컬러",
  season: "계절",
  background: "배경",
};

export default function AIGeneration() {
  const [mode, setMode] = useState<GenerationMode>("keyword");
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selections, setSelections] = useState<Partial<Record<Category, string>>>({});
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    // Mock image generation
    setGeneratedImage("https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080");
  };

  const handleReset = () => {
    setGeneratedImage(null);
    setSelections({});
    setSelectedCategory(null);
  };

  const handleShare = () => {
    alert("공유 기능이 실행됩니다!");
  };

  const handleFutureModeClick = () => {
    setShowComingSoonModal(true);
  };

  const handleCategorySelect = (category: Category, value: string) => {
    setSelections({ ...selections, [category]: value });
    setSelectedCategory(null);
  };

  // Check if all four categories are selected
  const isAllCategoriesSelected = 
    selections.style !== undefined &&
    selections.color !== undefined &&
    selections.season !== undefined &&
    selections.background !== undefined;

  return (
    <div className="bg-white relative min-h-screen w-full" data-name="AI Generation">
      <Navigation />
      
      <div className="max-w-[900px] mx-auto px-[40px] pt-[140px] pb-[80px]">
        {/* Mode selection - minimal tabs */}
        <div className="flex gap-[40px] mb-[60px] border-b border-[#e6e6e6]">
          <button
            onClick={() => setMode("keyword")}
            className={`pb-[12px] transition-all relative ${
              mode === "keyword" ? 'text-black' : 'text-[#999]'
            }`}
          >
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px]">
              키워드 생성
            </p>
            {mode === "keyword" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>
          <button
            onClick={handleFutureModeClick}
            className="pb-[12px] transition-all relative text-[#999]"
          >
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px]">
              고급 생성
            </p>
          </button>
        </div>

        {/* Generation interface */}
        <div className="flex flex-col gap-[32px]">
          {/* Puzzle grid preview/selector */}
          <div className="w-full h-[600px] bg-[#f7f7f7] rounded-[8px] overflow-hidden relative">
            {generatedImage ? (
              <ImageWithFallback
                src={generatedImage}
                alt="Generated style"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-[2px] bg-white p-[2px]">
                {/* Style - Top Left */}
                <button
                  onClick={() => setSelectedCategory(selectedCategory === 'style' ? null : 'style')}
                  className="relative bg-gradient-to-br from-[#e8e8e8] to-[#f7f7f7] hover:from-[#d8d8d8] hover:to-[#e8e8e8] transition-all overflow-hidden group"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px]">
                    {selections.style ? (
                      <>
                        <div className="absolute top-[20px] right-[20px] w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)] mb-[8px]">
                          {categoryLabels.style}
                        </p>
                        <p className="font-['Pretendard:Medium',sans-serif] text-[20px] text-black">
                          {selections.style}
                        </p>
                      </>
                    ) : (
                      <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.3)]">
                        {categoryLabels.style}
                      </p>
                    )}
                  </div>
                  {selectedCategory === 'style' && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-[24px] flex flex-col items-center justify-center gap-[8px]">
                      {categoryOptions.style.map((option) => (
                        <button
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySelect('style', option);
                          }}
                          className={`w-full px-[16px] py-[10px] rounded-[6px] transition-all ${
                            selections.style === option
                              ? 'bg-black text-white'
                              : 'bg-[#f7f7f7] hover:bg-[#e8e8e8] text-black'
                          }`}
                        >
                          <p className="font-['Pretendard:Regular',sans-serif] text-[14px]">{option}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </button>

                {/* Color - Top Right */}
                <button
                  onClick={() => setSelectedCategory(selectedCategory === 'color' ? null : 'color')}
                  className="relative bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] hover:from-[#e8e8e8] hover:to-[#d8d8d8] transition-all overflow-hidden group"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px]">
                    {selections.color ? (
                      <>
                        <div className="absolute top-[20px] right-[20px] w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)] mb-[8px]">
                          {categoryLabels.color}
                        </p>
                        <p className="font-['Pretendard:Medium',sans-serif] text-[20px] text-black">
                          {selections.color}
                        </p>
                      </>
                    ) : (
                      <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.3)]">
                        {categoryLabels.color}
                      </p>
                    )}
                  </div>
                  {selectedCategory === 'color' && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-[24px] flex flex-col items-center justify-center gap-[8px] overflow-y-auto">
                      {categoryOptions.color.map((option) => (
                        <button
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySelect('color', option);
                          }}
                          className={`w-full px-[16px] py-[10px] rounded-[6px] transition-all ${
                            selections.color === option
                              ? 'bg-black text-white'
                              : 'bg-[#f7f7f7] hover:bg-[#e8e8e8] text-black'
                          }`}
                        >
                          <p className="font-['Pretendard:Regular',sans-serif] text-[14px]">{option}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </button>

                {/* Season - Bottom Left */}
                <button
                  onClick={() => setSelectedCategory(selectedCategory === 'season' ? null : 'season')}
                  className="relative bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] hover:from-[#e8e8e8] hover:to-[#d8d8d8] transition-all overflow-hidden group"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px]">
                    {selections.season ? (
                      <>
                        <div className="absolute top-[20px] right-[20px] w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)] mb-[8px]">
                          {categoryLabels.season}
                        </p>
                        <p className="font-['Pretendard:Medium',sans-serif] text-[20px] text-black">
                          {selections.season}
                        </p>
                      </>
                    ) : (
                      <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.3)]">
                        {categoryLabels.season}
                      </p>
                    )}
                  </div>
                  {selectedCategory === 'season' && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-[24px] flex flex-col items-center justify-center gap-[8px]">
                      {categoryOptions.season.map((option) => (
                        <button
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySelect('season', option);
                          }}
                          className={`w-full px-[16px] py-[10px] rounded-[6px] transition-all ${
                            selections.season === option
                              ? 'bg-black text-white'
                              : 'bg-[#f7f7f7] hover:bg-[#e8e8e8] text-black'
                          }`}
                        >
                          <p className="font-['Pretendard:Regular',sans-serif] text-[14px]">{option}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </button>

                {/* Background - Bottom Right */}
                <button
                  onClick={() => setSelectedCategory(selectedCategory === 'background' ? null : 'background')}
                  className="relative bg-gradient-to-br from-[#e8e8e8] to-[#f7f7f7] hover:from-[#d8d8d8] hover:to-[#e8e8e8] transition-all overflow-hidden group"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px]">
                    {selections.background ? (
                      <>
                        <div className="absolute top-[20px] right-[20px] w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center">
                          <Check className="w-[14px] h-[14px] text-white" />
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)] mb-[8px]">
                          {categoryLabels.background}
                        </p>
                        <p className="font-['Pretendard:Medium',sans-serif] text-[20px] text-black">
                          {selections.background}
                        </p>
                      </>
                    ) : (
                      <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.3)]">
                        {categoryLabels.background}
                      </p>
                    )}
                  </div>
                  {selectedCategory === 'background' && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-[24px] flex flex-col items-center justify-center gap-[8px] overflow-y-auto">
                      {categoryOptions.background.map((option) => (
                        <button
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategorySelect('background', option);
                          }}
                          className={`w-full px-[16px] py-[10px] rounded-[6px] transition-all ${
                            selections.background === option
                              ? 'bg-black text-white'
                              : 'bg-[#f7f7f7] hover:bg-[#e8e8e8] text-black'
                          }`}
                        >
                          <p className="font-['Pretendard:Regular',sans-serif] text-[14px]">{option}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Action buttons */}
          {!generatedImage ? (
            <button
              onClick={handleGenerate}
              disabled={!isAllCategoriesSelected}
              className={`rounded-[8px] px-[32px] py-[14px] transition-all w-auto self-center ${
                isAllCategoriesSelected
                  ? 'bg-[#303030] hover:bg-[rgba(48,48,48,0.8)] cursor-pointer'
                  : 'bg-[#e6e6e6] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Pretendard:Medium',sans-serif] text-[15px] ${
                isAllCategoriesSelected ? 'text-white' : 'text-[rgba(0,0,0,0.3)]'
              }`}>
                생성하기
              </p>
            </button>
          ) : (
            <div className="flex gap-[12px] justify-center">
              <button
                onClick={handleReset}
                className="bg-white border border-[#e6e6e6] rounded-[8px] px-[24px] py-[14px] transition-all hover:border-[#303030]"
              >
                <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#303030]">
                  다시하기
                </p>
              </button>
              <button
                onClick={handleShare}
                className="bg-[#303030] rounded-[8px] px-[24px] py-[14px] transition-all hover:bg-[rgba(48,48,48,0.8)] flex items-center justify-center gap-[8px]"
              >
                <Share2 className="size-[16px] text-white" />
                <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-white">
                  공유하기
                </p>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowComingSoonModal(false)}
        >
          <div 
            className="bg-white rounded-[16px] p-[60px] max-w-[400px] mx-[20px] relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="w-[80px] h-[80px] bg-[#f7f7f7] rounded-full flex items-center justify-center mb-[32px]">
              <svg 
                className="w-[40px] h-[40px] text-[#999]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                />
              </svg>
            </div>

            {/* Text */}
            <p className="font-['Pretendard:Medium',sans-serif] text-[18px] text-black text-center mb-[40px]">
              현재 개발중입니다
            </p>

            {/* Button */}
            <button
              onClick={() => setShowComingSoonModal(false)}
              className="bg-[#303030] rounded-[8px] px-[40px] py-[14px] transition-all hover:bg-[rgba(48,48,48,0.8)]"
            >
              <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-white">
                확인
              </p>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}