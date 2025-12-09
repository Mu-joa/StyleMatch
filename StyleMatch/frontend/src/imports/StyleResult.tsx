import imgImage from "figma:asset/9b92834dba5db2760928a8f3f665c5a65b4b8020.png";
import imgImage1 from "figma:asset/4737fe1bf44d7342d9605d5c93635abf8a144817.png";

function Image() {
  return (
    <div className="absolute h-[1400px] left-0 overflow-clip right-0 rounded-[8px] top-[100px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[44px] not-italic text-[24px] text-[rgba(0,0,0,0.75)] top-[1281px] translate-y-[-50%] w-[733px]">
        <p className="leading-[1.5]">당신은 깔끔하고 ㅇㅇㅇ적인 스타일의 취향을 가지고 있어요!</p>
      </div>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[716px] leading-[normal] left-[1334px] not-italic text-[64px] text-black top-[51px] tracking-[-1.28px] w-[83px]">스타일 이름</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[1440px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[741px] items-start left-0 top-[calc(50%-0.5px)] translate-y-[-50%] w-[1440px]" data-name="Card">
      <Image1 />
    </div>
  );
}

function LookBook() {
  return (
    <div className="absolute h-[890px] left-1/2 overflow-clip top-[3968px] translate-x-[-50%] w-[1440px]" data-name="LookBook">
      <Card />
    </div>
  );
}

function Items() {
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

function Items1() {
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

function Items2() {
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
    <div className="absolute bg-white h-[431px] left-[140px] overflow-clip right-[140px] top-[4858px]" data-name="Navigation / Footer">
      <Items />
      <Items1 />
      <Items2 />
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

function Comment() {
  return (
    <div className="absolute bg-white h-[743px] left-1/2 overflow-clip top-[1500px] translate-x-[-50%] w-[1440px]" data-name="comment">
      <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] left-[calc(50%-0.5px)] not-italic text-[24px] text-[rgba(0,0,0,0.75)] text-center top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[733px]">
        <p className="mb-0">{`YOUR STYLE MATCH `}</p>
        <p className="mb-0"> </p>
        <p className="mb-0">{`클린 캐주얼 `}</p>
        <p className="mb-0"> </p>
        <p className="mb-0">{`후드 / 스트레이트 데님 / 화이트 스니커즈 / 뉴트럴 톤 / 미니멀 액세서리 `}</p>
        <p className="mb-0"> </p>
        <p className="mb-0">{`MOOD: 편안함 / 깔끔함 / 베이직 `}</p>
        <p>{`PALETTE: 블랙 / 그레이 / 화이트 `}</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[1396px] left-0 rounded-[8px] top-[165px] w-[1339px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Style() {
  return (
    <div className="absolute h-[1725px] left-[85px] overflow-clip top-[2243px] w-[1270px]" data-name="style">
      <Image2 />
    </div>
  );
}

function Items3() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center justify-end leading-[0] left-[calc(50%-0.5px)] not-italic text-[24px] text-black text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Items">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">STYLE MATCH</p>
      </div>
      <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">TRENDING BRANDS</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[100px] left-[-4px] overflow-clip right-[4px] top-0" data-name="Navigation">
      <div className="absolute flex h-[30.23px] items-center justify-center left-[90px] top-[50.11px] translate-y-[-50%] w-[128.469px]" style={{ "--transform-inner-width": "130.046875", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-[359deg]">
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] relative text-[32px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px] whitespace-pre">Fash !ON</p>
          </div>
        </div>
      </div>
      <Items3 />
    </div>
  );
}

export default function StyleResult() {
  return (
    <div className="bg-white relative size-full" data-name="Style Result">
      <Image />
      <LookBook />
      <NavigationFooter />
      <Comment />
      <Style />
      <Navigation />
    </div>
  );
}