import { Menu, Search } from "lucide-react";

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-5 px-8">
        <div className="flex gap-2 items-center">
          <Menu className="size-5 cursor-pointer" />
          <span className="font-bold hidden md:flex">Menu</span>
        </div>
        <h1 className="md:text-2xl font-bold text-[#60A5FA]">Tech News</h1>
        <div className="flex gap-2">
          <button className="font-bold hidden md:flex">Buscar</button>
          <Search className="size-5 cursor-pointer" />
        </div>
      </div>
      <nav className="px-8 py-[14px] border border-r-0 border-l-0 border-[#1E293B]">
        <ul className="flex items-center justify-between overflow-x-auto overflow-hidden">
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Inteligência Artificial
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Blockchain
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Hologramas
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Internet
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Vestíveis
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Realidade Aumentada
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm text-[#CBD5E1]">
              Realidade Virtual
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
