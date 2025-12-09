import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  return (
    <div className="fixed h-[80px] left-0 overflow-clip right-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[rgba(0,0,0,0.05)]" data-name="Navigation">
      <div className="max-w-[900px] mx-auto h-full flex items-center justify-between px-[40px]">
        <Link to="/" className="flex-none">
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] relative text-[28px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] whitespace-pre">Fash !ON</p>
          </div>
        </Link>
        
        <div className="flex font-['Pretendard:Medium',sans-serif] gap-[32px] items-center leading-[0] not-italic text-[16px] text-nowrap">
          <Link 
            to="/brands" 
            className={`flex flex-col justify-center relative shrink-0 transition-opacity hover:opacity-60 ${location.pathname === '/brands' ? 'font-["Pretendard:ExtraBold",sans-serif]' : ''}`}
          >
            <p className="leading-[1.5] text-nowrap whitespace-pre">BRANDS</p>
          </Link>
          <Link 
            to="/style-match" 
            className={`flex flex-col justify-center relative shrink-0 transition-opacity hover:opacity-60 ${location.pathname === '/style-match' || location.pathname === '/style-result' ? 'font-["Pretendard:ExtraBold",sans-serif]' : ''}`}
          >
            <p className="leading-[1.5] text-nowrap whitespace-pre">MATCH</p>
          </Link>
          <Link 
            to="/ai-generation" 
            className={`flex flex-col justify-center relative shrink-0 transition-opacity hover:opacity-60 ${location.pathname === '/ai-generation' ? 'font-["Pretendard:ExtraBold",sans-serif]' : ''}`}
          >
            <p className="leading-[1.5] text-nowrap whitespace-pre">AI</p>
            {/* NEW indicator dot */}
            <span className="absolute -top-[4px] -right-[12px] w-[8px] h-[8px] bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}