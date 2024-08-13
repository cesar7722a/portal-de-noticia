import { ReactNode } from "react";

interface TitleArtigoProps {
  children: ReactNode;
}

export function TitleArtigo({ children }: TitleArtigoProps) {
  return (
    <span className="font-medium text-xs bg-[#1D4ED8] px-2 py-1 w-[72px] rounded">
      {children}
    </span>
  );
}
