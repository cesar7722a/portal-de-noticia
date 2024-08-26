import { ArrowRight } from "lucide-react";
import { Separator } from "./separator";

export function BannerMoreWeek() {
  return (
    <div className="space-y-6 pb-6">
      <div>
        <Separator />
        <div className="flex justify-between py-2">
          <span className="font-semibold text-sm text-[#CBD5E1]">
            Mais lidas da semana
          </span>
          <button className="flex items-center gap-1 font-semibold text-sm text-[#CBD5E1] hover:text-[#1D4ED8]">
            Ver mais <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="md:w-[392px] space-y-2 rounded md:rounded-none">
          <div className="bg-[url('../public/image06.png')] bg-center bg-cover h-40"></div>
          <p className="font-bold line-clamp-3">
            Protótipo de veículo voador é apresentado, marcando o início da era
            dos transportes aéreos pessoais.
          </p>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image07.png')] bg-center bg-cover h-40"></div>
          <p className="font-bold line-clamp-3">
            Plataforma de videoconferência apresenta nova função de hologramas,
            tornando as chamadas virtuais mais realistas e envolventes.
          </p>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image08.png')] bg-center bg-cover h-40"></div>
          <p className="font-bold line-clamp-3">
            Nova geração de consoles de videogame é lançada, trazendo gráficos
            ultra-realistas e experiências de jogo totalmente envolventes.
          </p>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image09.png')] bg-center bg-cover h-40"></div>
          <p className="font-bold line-clamp-3">
            Projeto busca oferecer internet de alta velocidade em áreas remotas
            através de satélites.
          </p>
        </div>
      </div>
    </div>
  );
}
