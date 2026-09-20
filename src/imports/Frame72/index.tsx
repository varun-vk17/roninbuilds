function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-center relative shrink-0 text-center">
      <p className="font-['Monument_Extended:Ultrabold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-white uppercase w-full">WE THINK</p>
      <div className="capitalize font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[28px] text-[rgba(255,255,255,0.8)] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[1.6] mb-0">ATTENTION IS EASY TO BUY. INTEREST IS HARDER TO EARN.</p>
        <p className="leading-[1.6]">ACTION TAKES A REASON.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="bg-gradient-to-b from-[#5ea4e0] h-[429px] relative rounded-[30px] shrink-0 to-[#0051f7] w-full" />;
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center pb-[60px] pt-[66px] px-[100px] relative size-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}