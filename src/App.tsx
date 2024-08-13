import { Menu, Search } from "lucide-react";

export function App() {
  return (
    <div>
      <header>
        <div className="flex justify-between items-center py-5 px-8">
          <div className="flex gap-2 items-center">
            <Menu className="size-5" />
            <span className="font-bold hidden md:flex">Menu</span>
          </div>
          <h1 className="text-2xl font-bold text-[#60A5FA]">Tech News</h1>
          <div className="flex gap-2">
            <button className="font-bold hidden md:flex">Buscar</button>
            <Search className="size-5" />
          </div>
        </div>
        <nav></nav>
      </header>
    </div>
  );
}
