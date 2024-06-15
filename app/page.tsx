import { SpiritualGiftsForm } from "./SpiritualGiftsForm";
import { Instructions } from "./Instructions";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-sans lg:flex">
        <Instructions />
        <Suspense>
          <SpiritualGiftsForm />
        </Suspense>
      </div>
    </main>
  );
}
