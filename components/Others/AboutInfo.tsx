import Link from "next/link";
import { TokenETH, TokenSOL } from "@web3icons/react";

const AboutInfo = () => {
  return (
    <div className="space-y-10">
      {/* Image & Title(s) */}
      <div className="space-y-8">
        {/* Display Picture */}
        <div className="w-32 h-32 md:w-24 md:h-24 rounded-xl bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat"></div>

        {/* Title(s) md*/}
        <div className="md:flex gap-3 items-center font-medium hidden">
          <span className="bg-secondary py-3 px-4 rounded-3xl">
            Frontend Engineer
          </span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenETH variant="branded" size="25" />
          </span>
          <span className="bg-secondary py-3 px-4 rounded-3xl">Community</span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenSOL variant="branded" size="25" />
          </span>
        </div>

        {/* Title(s) sm*/}
        <div className="flex flex-col gap-5 font-medium md:hidden">
          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Frontend Engineer
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenETH variant="branded" size="30" />
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Community
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenSOL variant="branded" size="30" />
            </span>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="space-y-3 font-medium">
        <p>Hey, I&apos;m Mercy! ✦</p>
        <p>
          i build frontend experiences 🧪, from idea 📂 to unicorn status 🦄.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo . For ethereum{" "}
        </p>
        <div className="flex gap-2 items-center">
          <Link href={`/linkendln.com`}>Linkedln</Link>
          <span>✦</span>
          <Link href={`/github.com`}>Github</Link>
          <span>✦</span>
          <Link href={`/youtube.com`}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
