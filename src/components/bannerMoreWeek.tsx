import { ArrowRight } from "lucide-react";
import { Separator } from "./separator";
import { Text } from "./Text";

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
        <div className="md:w-[292px] space-y-2 rounded md:rounded-none">
          <div className="bg-[url('../public/image06.png')] bg-center bg-cover h-40"></div>
          <Text>
            Protótipo de veículo voador é<br /> apresentado, marcando o início
            da
            <br />
            era dos transportes aéreos pessoais.
          </Text>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image07.png')] bg-center bg-cover h-40"></div>
          <Text>
            Plataforma de videoconferência
            <br /> apresenta nova função de
            <br /> hologramas, tornando as chamadas virtuais mais realistas e
            envolventes.
          </Text>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image08.png')] bg-center bg-cover h-40"></div>
          <Text>
            Nova geração de consoles de
            <br /> videogame é lançada, trazendo
            <br /> gráficos ultra-realistas e experiências de jogo totalmente
            envolventes.
          </Text>
        </div>
        <div className="md:w-[392px] space-y-2">
          <div className="bg-[url('../public/image09.png')] bg-center bg-cover h-40"></div>
          <Text>
            Projeto busca oferecer internet
            <br /> de alta velocidade em áreas remotas
            <br /> através de satélites.
          </Text>
        </div>
      </div>
    </div>
  );
}
