export function Footer() {
  return (
    <div className="bg-white py-[80px] w-full border-t border-[rgba(0,0,0,0.05)]" data-name="Navigation / Footer">
      <div className="max-w-[900px] mx-auto px-[40px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[20px] text-black text-nowrap">
            <p className="leading-[1.5] whitespace-pre">Fash !ON</p>
          </div>
          
          <div className="h-[1px] bg-[#E6E6E6] w-full max-w-[820px]" />
          
          <div className="grid grid-cols-3 gap-[32px]">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] gap-[16px] text-[14px]">
              <div className="text-black">
                <p className="leading-[1.5]">Social</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Instagram</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Github</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Email</p>
              </div>
            </div>
            
            <div className="flex flex-col font-['Inter:Medium',sans-serif] gap-[16px] text-[14px]">
              <div className="text-black">
                <p className="leading-[1.5]">Features</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Style Match</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Brand Rank</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Coordination</p>
              </div>
            </div>
            
            <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] gap-[16px] text-[14px]">
              <div className="text-black">
                <p className="leading-[1.5]">About</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">Fash !ON</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">FAQ</p>
              </div>
              <div className="text-[#454545]">
                <p className="leading-[1.5]">페이지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}