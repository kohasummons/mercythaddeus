import Image from "next/image";
import billa from "@/assets/images/Billa-light.svg";
import me from "@/assets/images/me.png";

export default function BillaHeader() {
  return (
    <header className="text-white relative rounded-[--billa-border-radius] w-[--billa-container-width] bg-billa-gradient-black">
      <div className="relative flex flex-row w-full">
        <div className="flex flex-col gap-4 whitespace-pre-wrap p-12 pr-0 max-w-[55%]">
          <div className="flex">
            <Image
              className="w-[48px] h-[42px] text-white"
              src={billa}
              alt="Billa"
              width={100}
              height={100}
            />
          </div>
          <div className="font-mono text-5xl font-bold leading-[.95]">
            Mercy Thaddeus
          </div>
          <div className="text-base opacity-40 leading-[1.5] font-mono">
            Communities & Code.
          </div>
        </div>
        <div className="absolute flex items-center right-0 bottom-0 translate-x-[12px] translate-y-[44px] dir-rtl">
          <Image src={me} className="w-[300px] h-[300px] rounded-full" alt="Me" width={100} height={100} />
        </div>
      </div>

      <div id="banner-background" className="absolute pointer-events-none z-[1] top-0 w-full h-full opacity-8% rounded-[--billa-border-radius]">
        <div className="animate-heart-move">
          <div
            id="banner-background-inner"
            className="bg-repeat w-[800px] h-[400px] rotate-[-10deg] scale-[1.5] translate-y-[-70px]"
          ></div>
        </div>
      </div>
    </header>
  );
}
