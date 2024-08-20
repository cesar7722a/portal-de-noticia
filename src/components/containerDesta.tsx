import { ReactNode } from "react";

interface CotainerDestaProps {
  children: ReactNode;
}

export function ContainerDesta({ children }: CotainerDestaProps) {
  return (
    <div className="flex flex-row-reverse md:flex-row gap-4 w-[528px] md:w-[729px]">
      {children}
    </div>
  );
}
