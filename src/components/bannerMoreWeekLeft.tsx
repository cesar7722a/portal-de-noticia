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
      <div>
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
            Dispositivo portátil promete traduzir instantaneamente
            <br /> diferentes idiomas, facilitando a comunicação global.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            Em um mundo cada vez mais conectado, a comunicação sem fronteiras é
            <br /> essencial. Nesse contexto, um dispositivo portátil surge como
            um verdadeiro
            <br /> herói linguístico, prometendo quebrar as barreiras
            idiomáticas instantaneamente.
            <br /> Imagine poder se comunicar fluentemente em qualquer lugar do
            mundo, independentemente do idioma local. Este dispositivo não é
            mais uma visão futurista, mas uma realidade impressionante que está
            transformando a forma como nos conectamos globalmente. Nesta
            reportagem, mergulharemos nas funcionalidades deste dispositivo
            revolucionário e como ele está moldando uma
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
            Criados para auxiliar idosos, robôs de companhia ganham
            <br /> popularidade, oferecendo suporte emocional e físico aos
            usuários.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            A tecnologia não só avança, mas também busca tornar a vida mais
            significativa
            <br /> para todas as gerações. No cenário atual, os robôs sociais,
            projetados
            <br /> especialmente para oferecer apoio e companhia aos idosos,
            estão ganhando
            <br /> destaque. Mais do que meros assistentes, esses robôs são
            programados para fornecer suporte emocional e físico, preenchendo
            lacunas nas necessidades de cuidado. Nesta matéria, exploraremos
            como esses companheiros tecnológicos estão impactando positivamente
            a qualidade de vida da terceira idade e proporcionando uma nova
            perspectiva sobre o envelhecimento.
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
            Aplicativo utiliza inteligência artificial para ajudar usuários a
            <br />
            manterem o foco e aumentarem a produtividade no dia a dia.
          </h2>
          <p className="text-sm text-[#CBD5E1] truncate">
            No turbilhão da vida moderna, onde distrações são abundantes, um
            aplicativo
            <br /> inovador surge como um aliado indispensável para quem busca
            maior
            <br /> concentração e eficiência no cotidiano. Utilizando avançados
            algoritmos de
            <br /> inteligência artificial, este aplicativo promete mais do que
            simplesmente gerenciar tarefas; ele está programado para compreender
            os padrões de trabalho de cada usuário, oferecendo sugestões
            personalizadas para otimizar o tempo e maximizar a produtividade.
            Nesta matéria, exploraremos como essa ferramenta tecnológica está se
            tornando a chave para manter o foco em um mundo cada vez mais cheio
            de distrações, transformando a maneira como encaramos nossas
            responsabilidades diárias.
          </p>
        </div>
        <div className="size-44">
          <img src={Imagem13} alt="" width={176} height={176} />
        </div>
      </div>
    </div>
  );
}
