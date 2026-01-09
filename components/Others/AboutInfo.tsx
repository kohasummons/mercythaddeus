import Link from "next/link";
import { TokenETH, TokenSOL } from "@web3icons/react";

const AboutInfo = () => {
  return (
    <section className="space-y-10">
      {/* Image & Title(s) */}
      <div className="space-y-8">
        {/* Display Picture */}
        <div className="w-32 h-32 md:w-24 md:h-24 rounded-xl bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat" role="img" aria-label="Mercy Thaddeus professional photo"></div>

        {/* Title(s) md*/}
        <div className="md:flex gap-3 items-center font-medium hidden">
          <span className="bg-secondary py-3 px-4 rounded-3xl">
            Software Engineer
          </span>
          <span className="bg-secondary py-3 px-4 rounded-3xl">
            AI Creator
          </span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenETH variant="branded" size="25" />
          </span>
          <span className="bg-secondary py-3 px-4 rounded-3xl">Blockchain</span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenSOL variant="branded" size="25" />
          </span>
        </div>

        {/* Title(s) sm*/}
        <div className="flex flex-col gap-5 font-medium md:hidden">
          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Software Engineer
            </span>
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              AI Creator
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenETH variant="branded" size="30" />
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Blockchain
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenSOL variant="branded" size="30" />
            </span>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="space-y-3 font-medium">
        <h1>Hey, I&apos;m Mercy! ✦</h1>
        <p>
          Software Engineer at the intersection of AI, blockchain, and modern product thinking.
        </p>
        <p>
          I ship products across blockchain and AI, crafting clean interfaces that simplify complexity. I teach builders how to turn ideas into prototypes and create content helping people apply new AI tools.
          <br /><br />
          Outside of work, I run <span className="text-[#1a1a1a]">TechUp</span> — a nonprofit helping young people access tech opportunities.
        </p>
        <div className="flex gap-2 items-center">
          <Link href="https://www.linkedin.com/in/mercythaddeus" className="hover:text-pink-500 transition-colors">Linkedln</Link>
          <span>✦</span>
          <Link href="https://github.com/mercythaddeus" className="hover:text-pink-500 transition-colors">Github</Link>
          <span>✦</span>
          <Link href="https://x.com/global_techgirl" className="hover:text-pink-500 transition-colors">X</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
