import { Text } from "./Text";
import { TitleArtigo } from "./titleArtigo";

export function BannerWelcome() {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[url('../public/image01.png')] bg-cover bg-center md:w-[728px] h-[416px] flex items-end rounded md:rounded-none">
          <div className="md:px-6 md:pb-6 md:pt-[72px] px-4 pt-8 pb-4 flex flex-col gap-2">
            <TitleArtigo>Robótica</TitleArtigo>
            <p className="font-extrabold text-2xl truncate w-[398px] md:w-full">
              Robôs domésticos
              <br className="flex md:hidden" /> começam a ser
              <br className="flex md:hidden" /> adotados
              <br className="hidden md:flex" /> para tarefas diárias, prometendo
              mais
              <br className="hidden md:flex" /> conforto e eficiência nas
              residências.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-[url('../public/image02.png')] w-[288px] h-[200px] flex items-end 
              bg-cover bg-center px-3 pb-3 pt-9"
          >
            <div className="space-y-2">
              <TitleArtigo>Hologramas</TitleArtigo>
              <p className="font-extrabold text-sm w-[264px]">
                Novo Smartphone Projetor 3D chega ao mercado, transformando a
                forma como vemos nossas telas!
              </p>
            </div>
          </div>
          <div className="bg-[url('../public/image03.png')] w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end">
            <div className="space-y-2">
              <TitleArtigo>Internet</TitleArtigo>
              <Text>
                Tecnologia 6G chega às metrópoles
                <br /> brasileiras, prometendo revolucionar
                <br /> a forma como vivemos e nos comunicamos.
              </Text>
            </div>
          </div>
          <div className="bg-[url('../public/image04.png')] w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end">
            <div className="space-y-2">
              <TitleArtigo>Vestíveis</TitleArtigo>
              <Text>
                Empresa lança relógio inteligente
                <br /> capaz de monitorar a saúde mental,
                <br /> oferecendo insights valiosos para o bem-estar pessoal.
              </Text>
            </div>
          </div>
          <div className="bg-[url('../public/image05.png')] w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end">
            <div className="space-y-2">
              <TitleArtigo>Realidade Virtua</TitleArtigo>
              <Text>
                Escolas adotam a tecnologia VR para <br />
                proporcionar experiências imersivas,
                <br /> transformando a aprendizagem tradicional.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
