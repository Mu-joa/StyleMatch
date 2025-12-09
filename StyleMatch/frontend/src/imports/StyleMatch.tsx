import imgImage from "figma:asset/4737fe1bf44d7342d9605d5c93635abf8a144817.png";
import imgImage1 from "figma:asset/379c0155bc413a61ca41917df832a2e64530e9d7.png";

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage} />
      </div>
      <p className="absolute bottom-[120px] font-['Pretendard:Medium',sans-serif] leading-[120px] left-[360px] not-italic text-[28px] text-center text-nowrap text-white tracking-[-0.56px] translate-x-[-50%] translate-y-[100%] whitespace-pre">자세히 보기</p>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1670px] items-start left-[720px] top-0 w-[720px]" data-name="Card">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
      </div>
      <p className="absolute bottom-[120px] font-['Pretendard:Medium',sans-serif] leading-[120px] left-[360px] not-italic text-[28px] text-center text-nowrap text-white tracking-[-0.56px] translate-x-[-50%] translate-y-[100%] whitespace-pre">자세히 보기</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1670px] items-start left-0 top-[351px] w-[720px]" data-name="Card">
      <Image1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[2165px] left-0 overflow-clip top-[100px] w-[1440px]" data-name="Section">
      <Card />
      <Card1 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[120px] leading-[120px] left-[calc(50%-536px)] not-italic text-[96px] text-white top-[calc(50%-59.5px)] tracking-[-1.92px] w-[1072px]">어떤 것을 더 선호하시나요?</p>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center justify-end leading-[0] left-[calc(50%-0.5px)] not-italic text-[24px] text-black text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Items">
      <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">STYLE MATCH</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">TRENDING BRANDS</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[100px] left-0 overflow-clip right-0 top-0" data-name="Navigation">
      <div className="absolute flex h-[30.23px] items-center justify-center left-[90px] top-[50.11px] translate-y-[-50%] w-[128.469px]" style={{ "--transform-inner-width": "130.046875", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-[359deg]">
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] relative text-[32px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] whitespace-pre">Fash !ON</p>
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
}

function Items1() {
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

function Items2() {
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

function Items3() {
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
    <div className="absolute bg-white h-[431px] left-[140px] overflow-clip right-[140px] top-[2121px]" data-name="Navigation / Footer">
      <Items1 />
      <Items2 />
      <Items3 />
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

export default function StyleMatch() {
  return (
    <div className="bg-white relative size-full" data-name="Style Match">
      <Section />
      <Navigation />
      <NavigationFooter />
    </div>
  );
}