import { BannerMoreWeek } from "./components/bannerMoreWeek";
import { BannerWelcome } from "./components/bannerWelcome";
import { Header } from "./components/header";

export function App() {
  return (
    <div>
      <Header />
      <main className="px-8 space-y-20">
        <BannerWelcome />
        <BannerMoreWeek />
      </main>
    </div>
  );
}
