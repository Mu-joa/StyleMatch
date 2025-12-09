import svgPaths from "./svg-4sau7spqni";
import imgHeaderWithImage from "figma:asset/5232b103830b7cc9a42d4746c4deb07caa32d12d.png";
import imgImage from "figma:asset/65d68f724f70b8f021d5f479cd5eb6004696c267.png";
import imgImage1 from "figma:asset/44b0aa43a57e23aec207706d7933d9eaa0f3360a.png";

function Down() {
  return (
    <div className="absolute h-[14px] left-[9px] top-[5px] w-[6px]" data-name="Down">
      <div className="absolute inset-[-7.14%_-16.67%_-7.14%_-10.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
          <g id="Down">
            <path d={svgPaths.p38813c00} id="Vector 140" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
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

function Dimmer() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.24)] h-[909px] left-0 top-0 w-[1442px]" data-name="Dimmer">
      <div className="absolute flex items-center justify-center left-1/2 size-[24px] top-[875px] translate-x-[-50%]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <IconexLightDown />
        </div>
      </div>
    </div>
  );
}

function HeaderWithImage() {
  return (
    <div className="absolute h-[909px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[1442px]" data-name="Header with image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f7f7f7] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeaderWithImage} />
      </div>
      <Dimmer />
    </div>
  );
}

function Items() {
  return (
    <div className="absolute content-stretch flex font-['Pretendard:Medium',sans-serif] gap-[48px] items-center justify-end leading-[0] left-[calc(50%-0.5px)] not-italic text-[24px] text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Items">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">STYLE MATCH</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">TRENDING BRANDS</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[100px] left-0 overflow-clip right-[2px] top-0" data-name="Navigation">
      <div className="absolute flex h-[30.23px] items-center justify-center left-[90px] top-[50.11px] translate-y-[-50%] w-[128.469px]" style={{ "--transform-inner-width": "130.046875", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-[359deg]">
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] relative text-[32px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] whitespace-pre">Fash !ON</p>
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
}

function Safearea() {
  return (
    <div className="absolute inset-[8.33%]" data-name="safearea">
      <div className="absolute bottom-0 left-[-1%] right-[-1%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <g id="safearea">
            <path d={svgPaths.p2a7ed060} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right">
      <Safearea />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#303030] bottom-[132px] right-0 rounded-[12px] w-[221.969px]" data-name="Button">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-[221.969px]">
        <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">나의 취향 분석하기</p>
        <Right />
        <div className="absolute bg-gradient-to-r bottom-0 from-[rgba(155,249,242,0)] h-[2px] left-[calc(50%-0.48px)] opacity-0 to-[rgba(155,249,242,0)] translate-x-[-50%] via-49% via-[#9bf9f2] w-px" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Items1() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Items">
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[50px] left-[calc(50%-581px)] not-italic text-[48px] text-black top-[133px] tracking-[-0.96px] w-[284.465px]">Find Trends.</p>
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[50px] left-[calc(50%-581px)] not-italic text-[64px] text-black top-[243px] tracking-[-1.28px] w-[379.286px]">Find Trends.</p>
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[50px] left-[calc(50%-581px)] not-italic text-[96px] text-black top-[383px] tracking-[-1.92px] w-[568.929px]">Find Trends.</p>
      <div className="absolute flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[1.4] left-0 not-italic text-[24px] text-black top-[642px] translate-y-[-50%] w-[817.836px]">
        <p className="mb-0">패션에 정답은 없지만,</p>
        <p className="mb-0">실패하지 않기 위한 가이드. 그정도에만 지나치지않아요.</p>
        <p>{`자신만의 스타일을 찾고 테렌드를 적용하며 어떻게 꾸려나갈지 학습할 차례입니다. `}</p>
      </div>
      <Button />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[825px] left-[140px] overflow-clip top-[909px] w-[1162px]" data-name="body">
      <Items1 />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Card">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Card">
      <Image1 />
    </div>
  );
}

function CardList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[863px] items-start left-[757px] top-[178px] w-[515px]" data-name="Card list">
      <Card />
      <Card1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[863px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgHeaderWithImage} />
      </div>
      <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[273px] not-italic text-[170px] text-nowrap text-white top-[757.5px] tracking-[-8.5px] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">59.4%</p>
      </div>
    </div>
  );
}

function CardBig() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[863px] items-start left-0 top-[178px] w-[717px]" data-name="Card big">
      <Image2 />
    </div>
  );
}

function StyleRank() {
  return (
    <div className="absolute h-[1150px] left-[85px] overflow-clip top-[1734px] w-[1272px]" data-name="Style Rank">
      <CardList />
      <CardBig />
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[50px] left-[calc(50%-636px)] not-italic text-[40px] text-black top-[109px] tracking-[-0.8px] w-[231px]">STYLE TOP</p>
    </div>
  );
}

function Items2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(83.33%+6.33px)] text-[16px] top-[197px] w-[187px]" data-name="Items">
      <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Social</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Github</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Email</p>
      </div>
    </div>
  );
}

function Items3() {
  return (
    <div className="absolute content-stretch flex flex-col font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-0 text-[16px] top-[197px] w-[187px]" data-name="Items">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">About</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Fash !ON</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">FAQ</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">페이지</p>
      </div>
    </div>
  );
}

function Items4() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(41.67%+2.67px)] text-[16px] top-[197px] w-[187px]" data-name="Items">
      <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Features</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Style Match</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Bran Ranking</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Coordination</p>
      </div>
    </div>
  );
}

function NavigationFooter() {
  return (
    <div className="absolute bg-white h-[431px] left-[141px] overflow-clip right-[141px] top-[2884px]" data-name="Navigation / Footer">
      <Items2 />
      <Items3 />
      <Items4 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(41.67%+60.67px)] not-italic text-[24px] text-black text-nowrap top-[73px] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">Fash !ON</p>
      </div>
      <div className="absolute h-0 left-[80px] top-[144px] w-[1280px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, #E6E6E6)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white opacity-80 relative size-full" data-name="Home">
      <HeaderWithImage />
      <Navigation />
      <Body />
      <StyleRank />
      <NavigationFooter />
    </div>
  );
}