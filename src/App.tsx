import { BannerMoreWeek } from "./components/bannerMoreWeek";
import { BannerMoreWeekLeft } from "./components/bannerMoreWeekLeft";
import { BannerWelcome } from "./components/bannerWelcome";
import { Header } from "./components/header";

export function App() {
  return (
    <div>
      <Header />
      <main className="px-8 space-y-20">
        <BannerWelcome />
        <BannerMoreWeek />
        <div className="space-x-8">
          <BannerMoreWeekLeft />
          <div></div>
        </div>
      </main>
    </div>
  );
}
