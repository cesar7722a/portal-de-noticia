import { ArrowRight } from "lucide-react";
import { Separator } from "./separator";
import { TitleArtigo } from "./titleArtigo";
import Imagem10 from "../../public/Image10.png";
import Imagem11 from "../../public/Image11.png";
import Imagem12 from "../../public/Image12.png";
import Imagem13 from "../../public/Image13.png";

export function BannerMoreWeekLeft() {
  return (
    <div className="space-y-6 w-[696px]">
      <div className="pt-3">
        <Separator />
        <div className="flex justify-between py-2">
          <span className="font-semibold text-sm text-[#CBD5E1]">
            Destaques de Inteligência Artificial
          </span>
          <button className="flex items-center gap-1 font-semibold text-sm text-[#CBD5E1] hover:text-[#1D4ED8]">
            Ver tudo <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="space-y-2 w-[504px]">
          <TitleArtigo>Inteligência Artificial</TitleArtigo>
          <h2 className="font-extrabold truncate">
            Empresa surpreende o mundo ao anunciar um algoritmo capaz
            <br /> de prever eventos futuros com alta precisão.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            Em um avanço surpreendente da inteligência artificial, uma empresa
            anuncia o<br /> desenvolvimento de um algoritmo capaz de prever
            eventos futuros com notável
            <br /> precisão. Descubra como essa tecnologia está desafiando as
            fronteiras da
            <br /> previsão e quais são as implicações para diversas áreas,
            desde finanças até planejamento estratégico.
          </p>
        </div>
        <div className="size-44">
          <img src={Imagem10} alt="" width={176} height={176} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="space-y-2 w-[504px]">
          <TitleArtigo>Inteligência Artificial</TitleArtigo>
          <h2 className="font-extrabold truncate">
            Empresa surpreende o mundo ao anunciar um algoritmo capaz
            <br /> de prever eventos futuros com alta precisão.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            Em um avanço surpreendente da inteligência artificial, uma empresa
            anuncia o<br /> desenvolvimento de um algoritmo capaz de prever
            eventos futuros com notável
            <br /> precisão. Descubra como essa tecnologia está desafiando as
            fronteiras da
            <br /> previsão e quais são as implicações para diversas áreas,
            desde finanças até planejamento estratégico.
          </p>
        </div>
        <div className="size-44">
          <img src={Imagem11} alt="" width={176} height={176} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="space-y-2 w-[504px]">
          <TitleArtigo>Inteligência Artificial</TitleArtigo>
          <h2 className="font-extrabold truncate">
            Empresa surpreende o mundo ao anunciar um algoritmo capaz
            <br /> de prever eventos futuros com alta precisão.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            Em um avanço surpreendente da inteligência artificial, uma empresa
            anuncia o<br /> desenvolvimento de um algoritmo capaz de prever
            eventos futuros com notável
            <br /> precisão. Descubra como essa tecnologia está desafiando as
            fronteiras da
            <br /> previsão e quais são as implicações para diversas áreas,
            desde finanças até planejamento estratégico.
          </p>
        </div>
        <div className="size-44">
          <img src={Imagem12} alt="" width={176} height={176} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="space-y-2 w-[504px]">
          <TitleArtigo>Inteligência Artificial</TitleArtigo>
          <h2 className="font-extrabold truncate">
            Empresa surpreende o mundo ao anunciar um algoritmo capaz
            <br /> de prever eventos futuros com alta precisão.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            Em um avanço surpreendente da inteligência artificial, uma empresa
            anuncia o<br /> desenvolvimento de um algoritmo capaz de prever
            eventos futuros com notável
            <br /> precisão. Descubra como essa tecnologia está desafiando as
            fronteiras da
            <br /> previsão e quais são as implicações para diversas áreas,
            desde finanças até planejamento estratégico.
          </p>
        </div>
        <div className="size-44">
          <img src={Imagem13} alt="" width={176} height={176} />
        </div>
      </div>
    </div>
  );
}
