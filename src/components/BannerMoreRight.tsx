import Ads from "../../public/Ads.png";
import Imagem14 from "../../public/Image14.png";
import Imagem15 from "../../public/Image15.png";
import Imagem16 from "../../public/Image16.png";
import Imagem17 from "../../public/Image17.png";
import Imagem18 from "../../public/Image18.png";
import { ArrowRight } from "lucide-react";
import { Separator } from "./separator";
import { TitleArtigo } from "./titleArtigo";
export function BannerMoreRight() {
  return (
    <div className="space-y-8">
      <figure className="">
        <img
          src={Ads}
          alt="publicidade rocketseat"
          className="w-full h-[280px] rounded"
        />
      </figure>
      <div className="space-y-6">
        <div>
          <Separator />
          <div className="flex justify-between pt-3 text-[#CBD5E1] font-semibold text-sm">
            <span>Viu isso aqui?</span>
            <button className="flex items-center gap-1 hover:text-[#1D4ED8]">
              Ver tudo
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <figure className="size-20">
              <img src={Imagem14} alt="" width={72} height={72} />
            </figure>
            <div className="space-y-2">
              <TitleArtigo>Software</TitleArtigo>
              <p className="font-black text-sm md:w-[488px] line-clamp-2">
                Aplicativo de monitoramento ambiental ganha destaque,
                incentivando práticas ecológicas e promovendo a conscientização.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <figure className="size-20">
              <img src={Imagem15} alt="" width={72} height={72} />
            </figure>
            <div className="space-y-2">
              <TitleArtigo>Software</TitleArtigo>
              <p className="font-black text-sm md:w-[488px] line-clamp-2">
                Aplicativo de monitoramento ambiental ganha destaque,
                incentivando práticas ecológicas e promovendo a conscientização.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <figure className="size-20">
              <img src={Imagem16} alt="" width={72} height={72} />
            </figure>
            <div className="space-y-2">
              <TitleArtigo>Software</TitleArtigo>
              <p className="font-black text-sm md:w-[488px] line-clamp-2">
                Aplicativo de monitoramento ambiental ganha destaque,
                incentivando práticas ecológicas e promovendo a conscientização.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <figure className="size-20">
              <img src={Imagem17} alt="" width={72} height={72} />
            </figure>
            <div className="space-y-2">
              <TitleArtigo>Software</TitleArtigo>
              <p className="font-black text-sm md:w-[488px] line-clamp-2">
                Aplicativo de monitoramento ambiental ganha destaque,
                incentivando práticas ecológicas e promovendo a conscientização.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <figure className="size-20">
              <img src={Imagem18} alt="" width={72} height={72} />
            </figure>
            <div className="space-y-2">
              <TitleArtigo>Software</TitleArtigo>
              <p className="font-black text-sm line-clamp-2 md:w-[488px]">
                Aplicativo de monitoramento ambiental ganha destaque,
                incentivando práticas ecológicas e promovendo a conscientização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
