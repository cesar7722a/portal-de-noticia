import { BannerMoreRight } from "./components/BannerMoreRight";
import { BannerMoreWeek } from "./components/bannerMoreWeek";
import { BannerMoreWeekLeft } from "./components/bannerMoreWeekLeft";
import { BannerWelcome } from "./components/bannerWelcome";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="pb-8">
      <Header />
      <main className="md:px-8 md:space-y-20 p-4 space-y-8">
        <BannerWelcome />
        <BannerMoreWeek />
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <BannerMoreWeekLeft />
          <BannerMoreRight />
        </div>
      </main>
    </div>
  );
}
