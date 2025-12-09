import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { styleImages, StyleType } from "../data/styleImages";

type Vote = {
  leftStyle: StyleType;
  rightStyle: StyleType;
  leftImage: string;
  rightImage: string;
};

const styleLabels: Record<StyleType, string> = {
  clean: "클린 캐주얼",
  trendy: "트렌디 스트릿",
  formal: "포멀 클래식",
  unique: "유니크 아트",
};

export default function StyleMatch() {
  const navigate = useNavigate();
  const [currentRound, setCurrentRound] = useState(0);
  const [votes, setVotes] = useState<Record<StyleType, number>>({
    clean: 0,
    trendy: 0,
    formal: 0,
    unique: 0,
  });
  const [currentVote, setCurrentVote] = useState<Vote | null>(null);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalRounds = 10;

  // Generate random vote pair
  const generateVote = (): Vote => {
    const styles: StyleType[] = ["clean", "trendy", "formal", "unique"];
    const leftStyle = styles[Math.floor(Math.random() * styles.length)];
    let rightStyle = styles[Math.floor(Math.random() * styles.length)];
    
    // Ensure different styles
    while (rightStyle === leftStyle) {
      rightStyle = styles[Math.floor(Math.random() * styles.length)];
    }

    const leftImages = styleImages[leftStyle];
    const rightImages = styleImages[rightStyle];
    const leftImage = leftImages[Math.floor(Math.random() * leftImages.length)];
    const rightImage = rightImages[Math.floor(Math.random() * rightImages.length)];

    return { leftStyle, rightStyle, leftImage, rightImage };
  };

  useEffect(() => {
    setCurrentVote(generateVote());
  }, []);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsStarted(true);
    }, 800);
  };

  const handleVote = (style: StyleType) => {
    const newVotes = { ...votes, [style]: votes[style] + 1 };
    setVotes(newVotes);

    if (currentRound + 1 >= totalRounds) {
      // Find the most voted style
      const maxStyle = Object.keys(newVotes).reduce((a, b) =>
        newVotes[a as StyleType] > newVotes[b as StyleType] ? a : b
      ) as StyleType;
      
      // Navigate to result page with the winning style
      navigate('/style-result', { state: { selectedStyle: maxStyle, votes: newVotes } });
    } else {
      setCurrentRound(currentRound + 1);
      setCurrentVote(generateVote());
    }
  };

  if (!currentVote) return null;

  return (
    <div className="bg-white relative min-h-screen w-full" data-name="Style Match">
      <Navigation />
      
      {/* Voting area */}
      <div className="relative h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center overflow-hidden">
        {/* Intro overlay - only covers body area */}
        {!isStarted && (
          <div 
            onClick={handleStart}
            className={`absolute inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-800 ${
              isAnimating ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            <div className={`text-center transition-all duration-500 ${isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[48px] text-white tracking-[-0.96px] mb-[16px]">
                스타일 매치 체험하기
              </p>
              <p className="font-['Pretendard:Regular',sans-serif] text-[18px] text-white/70">
                클릭하여 시작
              </p>
            </div>
          </div>
        )}
        
        {/* Progress indicator - positioned above images */}
        {isStarted && (
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 z-50 animate-fade-in">
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-white tracking-wider">
              {currentRound + 1} / {totalRounds}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-0 w-full h-full">
          {/* Left image */}
          <button
            onClick={() => handleVote(currentVote.leftStyle)}
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
            className="relative h-full overflow-hidden transition-all duration-500 ease-out"
            style={{
              width: hoveredSide === 'left' ? '60%' : hoveredSide === 'right' ? '40%' : '50%',
              filter: !isStarted ? 'blur(4px) grayscale(0.3)' : 'blur(0px) grayscale(0)'
            }}
            disabled={!isStarted}
          >
            <ImageWithFallback
              src={currentVote.leftImage}
              alt={currentVote.leftStyle}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: !isStarted ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            {/* Overlay with description */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
              style={{ opacity: hoveredSide === 'left' ? 1 : 0 }}
            >
              <div className="absolute bottom-[60px] left-[40px] right-[40px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[32px] text-white tracking-[-0.64px] mb-[12px]">
                  {styleLabels[currentVote.leftStyle]}
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-white/80">
                  자세히 보기
                </p>
              </div>
            </div>
          </button>

          {/* Right image */}
          <button
            onClick={() => handleVote(currentVote.rightStyle)}
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
            className="relative h-full overflow-hidden transition-all duration-500 ease-out"
            style={{
              width: hoveredSide === 'right' ? '60%' : hoveredSide === 'left' ? '40%' : '50%',
              filter: !isStarted ? 'blur(4px) grayscale(0.3)' : 'blur(0px) grayscale(0)'
            }}
            disabled={!isStarted}
          >
            <ImageWithFallback
              src={currentVote.rightImage}
              alt={currentVote.rightStyle}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: !isStarted ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            {/* Overlay with description */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
              style={{ opacity: hoveredSide === 'right' ? 1 : 0 }}
            >
              <div className="absolute bottom-[60px] left-[40px] right-[40px]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[32px] text-white tracking-[-0.64px] mb-[12px]">
                  {styleLabels[currentVote.rightStyle]}
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-white/80">
                  자세히 보기
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
