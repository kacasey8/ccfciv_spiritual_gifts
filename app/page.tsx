"use client";

import { SpiritualGiftsForm } from "./SpiritualGiftsForm";
import { Instructions } from "./Instructions";
import { Suspense, useState } from "react";

export default function Home() {
  const userLanguage = typeof window !== "undefined" ? navigator.language : "";
  const [language, setLanguage] = useState<"chinese" | "english">(
    userLanguage.toLocaleLowerCase().includes("ch") ? "chinese" : "english"
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 pt-0">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-sans lg:flex">
        <Instructions language={language} setLanguage={setLanguage} />
        <Suspense>
          <SpiritualGiftsForm language={language} />
        </Suspense>
      </div>
    </main>
  );
}
