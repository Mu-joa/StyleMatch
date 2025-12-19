import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { fetchVotes, Vote,  submitVote } from "../api/voteApi";
import type { StyleType } from "../types/style";


const styleLabels: Record<StyleType, string> = {
  clean: "깔끔함",
  trendy: "트렌디",
  formal: "단정함",
  unique: "특별함",
};

export default function StyleMatch() {
  const navigate = useNavigate();

  const totalRounds = 10;

  const [voteList, setVoteList] = useState<Vote[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentVote, setCurrentVote] = useState<Vote | null>(null);
  const [detailSide, setDetailSide] = useState<"left" | "right" | null>(null);
  const [votes, setVotes] = useState<Record<StyleType, number>>({
    clean: 0,
    trendy: 0,
    formal: 0,
    unique: 0,
  });

  const [hoveredSide, setHoveredSide] =
    useState<"left" | "right" | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

useEffect(() => {
    fetchVotes().then((data) => {
      setVoteList(data);
      setCurrentVote(data[0]);
    });
  }, []);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => setIsStarted(true), 800);
  };

  const handleVote = (style: StyleType) => {
  const newVotes = { ...votes, [style]: votes[style] + 1 };
  setVotes(newVotes);

  if (currentRound + 1 >= totalRounds) {
    const maxStyle = Object.keys(newVotes).reduce((a, b) =>
      newVotes[a as StyleType] > newVotes[b as StyleType] ? a : b
    ) as StyleType;

    // 🔥 여기서만 서버에 1번 저장
    submitVote(maxStyle);

    navigate("/style-result", {
      state: { selectedStyle: maxStyle, votes: newVotes },
    });
  } else {
    const nextRound = currentRound + 1;
    setCurrentRound(nextRound);
    setCurrentVote(voteList[nextRound]);
    setDetailSide(null);
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
                
                {detailSide !== "left" && (
                  <span
  onClick={(e) => {
    e.stopPropagation(); // 투표 클릭 방지
    setDetailSide(detailSide === "left" ? null : "left");
  }}
  className="cursor-pointer font-['Pretendard:Regular',sans-serif] text-[14px] text-white/80 hover:text-white transition"
>
  자세히 보기
  
</span>
)}
{detailSide === "left" && (
  <p className="mt-[12px] font-['Pretendard:SemiBold',sans-serif] text-[28px] text-white tracking-[-0.6px]">
    {styleLabels[currentVote.leftStyle]}
  </p>
)}

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
                
                {detailSide !== "right" && (<span
  onClick={(e) => {
    e.stopPropagation(); // 투표 클릭 방지
    setDetailSide(detailSide === "right" ? null : "right");
  }}
  className="cursor-pointer font-['Pretendard:Regular',sans-serif] text-[14px] text-white/80 hover:text-white transition"
>
  자세히 보기
</span>
)}
{detailSide === "right" && (
  <p className="mt-[12px] font-['Pretendard:SemiBold',sans-serif] text-[28px] text-white tracking-[-0.6px]">
    {styleLabels[currentVote.leftStyle]}
  </p>
)}
              </div>
            </div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function shouldNavigate(
  currentRound: number,
  totalRounds: number,
  hasNextVote: boolean
) {
  return currentRound + 1 >= totalRounds && hasNextVote;
}
