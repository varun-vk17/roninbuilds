import imgChatGptImageSep152026072531Pm1 from "./d86d665f27674f6799cb1a2dedf86e0d54d0d0c4.png";
import imgChatGptImageSep152026073333Pm1 from "./080051224697eba7e47ffe23872431a54649ac06.png";
import imgChatGptImageSep152026074328Pm1 from "./30b628f1fb71bfa217290fdd976a19b7cda38f3a.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[429px] items-center justify-center min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px]" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[178px] relative w-[226px]" data-name="ChatGPT Image Sep 15, 2026, 07_25_31 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageSep152026072531Pm1} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">FOUNDERS</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[429px] items-center justify-center min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px]" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <div className="h-[178px] relative shrink-0 w-[226px]" data-name="ChatGPT Image Sep 15, 2026, 07_33_33 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageSep152026073333Pm1} />
      </div>
      <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">Brands</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <div className="h-[178px] relative shrink-0 w-[226px]" data-name="ChatGPT Image Sep 15, 2026, 07_43_28 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageSep152026074328Pm1} />
      </div>
      <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">AND...</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] h-[429px] items-center justify-end min-w-px overflow-clip px-[24px] py-[25px] relative rounded-[30px]" style={{ backgroundImage: "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)" }}>
      <Frame5 />
      <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] lowercase relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        bUSINESSES THAT ARE
        <br aria-hidden />
        TIRED OF BUYING
        <br aria-hidden />
        ATTENTION THAT DOESN’T BUY BACK.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center justify-center pb-[137px] pt-[143px] px-[100px] relative size-full">
      <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-center text-white uppercase w-full">WE WORK WITH</p>
      <Frame2 />
    </div>
  );
}