function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[67px] items-center leading-[normal] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contact
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 14' }}>
        Work
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 14' }}>
        Love
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <p className="font-['Monument_Extended:Ultrabold',sans-serif] h-[118px] leading-[normal] min-w-full not-italic relative shrink-0 text-[120px] text-white w-[min-content]">STORYZEN</p>
      <div className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[normal] mb-0 whitespace-pre">{`A revenue based creative studio for businesses that turns what they’ve built `}</p>
        <p className="leading-[normal] whitespace-pre">into something people want to buy.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-center w-full">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        WE ARE
      </p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[41px] py-[8px] relative rounded-[40px] shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Start the work
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[142px] h-[750px] items-center overflow-clip px-[72px] py-[40px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-28.222638400066074deg, rgb(0, 81, 247) 40.902%, rgb(84, 130, 224) 99.197%)" }}>
      <Frame4 />
      <Frame5 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[640.5px] text-[16px] text-[rgba(255,255,255,0.8)] text-center top-[635px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{` REVENUE SYSTEM™ — THE THINKING, MAKING, AND EXPERIENCE BEHIND WHAT SELLS `}</p>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <div className="absolute h-0 left-0 top-[624px] w-[1280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
            <line id="Line 2" stroke="white" strokeOpacity="0.8" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[668px] w-[1280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
            <line id="Line 3" stroke="white" strokeOpacity="0.8" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}