function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[429px] items-start justify-between min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        THE PATTERN
      </p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.35] relative shrink-0 text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        GOOD PRODUCT.
        <br aria-hidden />
        UNCLEAR POSITIONING.
        <br aria-hidden />
        WEAK OFFER.
        <br aria-hidden />
        PRETTY PAGE.
        <br aria-hidden />
        NO REVENUE.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[429px] items-start justify-between min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px]" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        WHAT WE DO
      </p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        {`WE FIND WHAT'S`}
        <br aria-hidden />
        GETTING IN THE WAY
        <br aria-hidden />
        AND BUILD THE
        <br aria-hidden />
        REVENUE SYSTEM
        <br aria-hidden />
        AROUND IT.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[429px] items-start justify-between min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px]" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        THE PATTERN
      </p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        LESS EXPLAINING.
        <br aria-hidden />
        {` MORE UNDERSTANDING.`}
        <br aria-hidden />
        {` MORE “THAT’S EXACTLY WHAT I NEED.”`}
        <br aria-hidden />
        {` MORE PEOPLE READY TO BUY.`}
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[100px] items-center justify-center pb-[137px] pt-[143px] px-[100px] relative size-full text-white uppercase">
      <p className="font-['Monument_Extended:Ultrabold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-center w-full">MAKE IT SELL.</p>
      <Frame2 />
    </div>
  );
}