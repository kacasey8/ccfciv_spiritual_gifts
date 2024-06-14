import { SpiritualGiftsForm } from "./SpiritualGiftsForm";
import { Instructions } from "./Instructions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full flex-col max-w-5xl items-center justify-between lg:flex">
        <Instructions />
        <SpiritualGiftsForm />
      </div>
    </main>
  );
}
