"use client";

import { SpiritualGiftsForm } from "./SpiritualGiftsForm";
import { Instructions } from "./Instructions";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathName = usePathname();

  const language = pathName?.includes("chinese") ? "chinese" : "english";
  const setLanguage = (lang: "chinese" | "english") => {
    router.replace(`/${lang}`);
  };

  useEffect(() => {
    // If the user hits the root path, redirect based on the browser's language
    if (pathName === "/") {
      // Detect the browser's preferred language
      const userLanguage =
        typeof window !== "undefined" ? navigator.language : "";
      let detectedLocale = "chinese";

      if (userLanguage.toLocaleLowerCase().includes("en")) {
        detectedLocale = "english";
      }

      router.replace(`/${detectedLocale}`);
    }
  }, [pathName]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24 pt-0">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-sans lg:flex">
        <Instructions language={language} setLanguage={setLanguage} />
        <Suspense>
          <SpiritualGiftsForm language={language} />
        </Suspense>
      </div>
    </main>
  );
}
