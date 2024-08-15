import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function Text({ children }: TextProps) {
  return (
    <p className="font-extrabold text-sm truncate w-[264px]">{children}</p>
  );
}
