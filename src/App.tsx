import { BannerWelcome } from "./components/bannerWelcome";
import { Header } from "./components/header";

export function App() {
  return (
    <div>
      <Header />
      <div className="px-8 space-y-20">
        <BannerWelcome />
        <div className="border border-r-0 border-l-0 border-b-0 border-[#1E293B]">
          dd
        </div>
      </div>
    </div>
  );
}
