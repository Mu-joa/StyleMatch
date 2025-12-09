import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-4sau7spqni";
import imgHeaderWithImage from "figma:asset/5232b103830b7cc9a42d4746c4deb07caa32d12d.png";
import imgImage from "figma:asset/65d68f724f70b8f021d5f479cd5eb6004696c267.png";
import imgImage1 from "figma:asset/44b0aa43a57e23aec207706d7933d9eaa0f3360a.png";

function Down() {
  return (
    <div className="absolute h-[14px] left-[9px] top-[5px] w-[6px]" data-name="Down">
      <div className="absolute inset-[-7.14%_-16.67%_-7.14%_-10.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
          <g id="Down">
            <path d={svgPaths.p38813c00} id="Vector 140" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightDown() {
  return (
    <div className="relative size-[24px]" data-name="Iconex/Light/Down 2">
      <Down />
    </div>
  );
}

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white relative min-h-screen w-full" data-name="Home">
      <Navigation />
      
      {/* Header with image */}
      <div className={`${isExpanded ? 'max-w-none' : 'max-w-[900px]'} mx-auto transition-all duration-700`}>
        <div 
          className={`relative overflow-clip transition-all duration-700 ease-in-out ${
            isExpanded ? 'mt-[80px] h-[calc(200vh-80px)]' : 'mt-[80px] h-[600px]'
          }`}
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#f7f7f7] inset-0" />
            <img alt="" className="absolute max-w-none object-center object-cover size-full" src={imgHeaderWithImage} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.24)] inset-0">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`absolute flex items-center justify-center left-1/2 size-[24px] bottom-[34px] translate-x-[-50%] transition-all duration-500 hover:opacity-70 ${isExpanded ? 'text-white' : ''}`}
            >
              <div className={`flex-none transition-transform duration-700 ${isExpanded ? 'rotate-[90deg]' : 'rotate-[270deg] scale-y-[-100%]'}`}>
                <IconexLightDown />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Text content section - appears below expanded banner */}
      {isExpanded && (
        <div className="max-w-[900px] mx-auto px-[40px] py-[100px] bg-white">
          <div className="flex flex-col gap-[40px] max-w-[700px]">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Pretendard:Light',sans-serif] text-[14px] tracking-[0.2em] text-[rgba(0,0,0,0.5)] uppercase">
                Style Discovery Platform
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] leading-[1.15] text-[64px] tracking-[-2px] text-black">
                Find Your<br />Aesthetic
              </p>
            </div>
            
            <div className="flex flex-col gap-[20px] font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
              <p className="mb-0">
                스타일에는 정답이 없습니다.<br />
                다만, 당신만의 고유한 취향을 발견하고 표현하는 방법이 있을 뿐입니다.
              </p>
              <p className="mb-0">
                AI 기반 분석으로 당신의 잠재된 스타일을 찾아내고,<br />
                트렌드와 클래식의 균형점에서 나만의 시그니처를 완성하세요.
              </p>
            </div>
            
            <Link to="/style-match" className="rounded-[8px] px-[24px] py-[12px] transition-all hover:bg-[rgba(0,0,0,0.85)] inline-flex items-center justify-center gap-[8px] w-fit bg-black text-white">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap whitespace-pre">
                Start Analysis
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute bottom-0 left-[-1%] right-[-1%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                      <path d={svgPaths.p2a7ed060} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Body - Normal state */}
      {!isExpanded && (
        <div className="max-w-[900px] mx-auto px-[40px] py-[80px]">
          <div className="flex flex-col gap-[40px] max-w-[700px]">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Pretendard:Light',sans-serif] text-[14px] tracking-[0.2em] text-[rgba(0,0,0,0.5)] uppercase">
                Style Discovery Platform
              </p>
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] text-[64px] tracking-[-1.28px] text-black">
                Find Your<br />Aesthetic
              </p>
            </div>
            
            <div className="flex flex-col gap-[20px] font-['Pretendard:Regular',sans-serif] text-[16px] leading-[1.8] text-[rgba(0,0,0,0.7)]">
              <p className="mb-0">
                스타일에는 정답이 없습니다.<br />
                다만, 당신만의 고유한 취향을 발견하고 표현하는 방법이 있을 뿐입니다.
              </p>
              <p className="mb-0">
                AI 기반 분석으로 당신의 잠재된 스타일을 찾아내고,<br />
                트렌드와 클래식의 균형점에서 나만의 시그니처를 완성하세요.
              </p>
            </div>
            
            <Link to="/style-match" className="rounded-[8px] px-[24px] py-[12px] transition-all hover:bg-[rgba(48,48,48,0.8)] inline-flex items-center justify-center gap-[8px] w-fit bg-[#303030] text-white">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap whitespace-pre">
                Start Analysis
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute bottom-0 left-[-1%] right-[-1%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                      <path d={svgPaths.p2a7ed060} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Style Rank */}
      <div className="max-w-[900px] mx-auto px-[40px] pb-[80px]">
        <div className="flex flex-col gap-[20px]">
          <div className="h-[700px] rounded-[8px] relative overflow-clip">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
              <img alt="" className="absolute max-w-none object-center object-cover rounded-[8px] size-full" src={imgHeaderWithImage} />
            </div>
            <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] right-[40px] not-italic text-[96px] text-nowrap text-white bottom-[40px] tracking-[-4.8px]">
              <p className="leading-[1.5] whitespace-pre">59.4%</p>
            </div>
          </div>
          
          <div className="flex gap-[20px]">
            <div className="flex-1 h-[400px] rounded-[8px] relative overflow-clip">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-center object-cover rounded-[8px] size-full" src={imgImage} />
              </div>
            </div>
            <div className="flex-1 h-[400px] rounded-[8px] relative overflow-clip">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-center object-cover rounded-[8px] size-full" src={imgImage1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}