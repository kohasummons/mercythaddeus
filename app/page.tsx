import Image from "next/image";
import BillaHeader from "@/components/billa-header";
import BillaOptions from "@/components/billa-options";

export default function Home() {
  return (
    <div className="flex w-full h-max justify-center overflow-scroll overflow-x-hidden p-3 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 max-w-full w-[--billa-container-width] items-center sm:items-start">
        <BillaHeader />
        <BillaOptions />
      </main>
    </div>
  );
}
