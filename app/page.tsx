"use client";

import { Suspense } from "react";

import NameInfiniteScroll from "@/components/Animations/NameInfiniteScroll";
import GeneralLayout from "@/components/layout/GeneralLayout";

export default function Home() {
  return (
    <Suspense>
      <div className="relative">
        <NameInfiniteScroll />

        <div className="pt-16 md:pt-28 2xl:pt-32">
          <GeneralLayout />
        </div>
      </div>
    </Suspense>
  );
}
