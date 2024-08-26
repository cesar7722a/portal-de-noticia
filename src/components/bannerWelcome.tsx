import { TitleArtigo } from "./titleArtigo";

export function BannerWelcome() {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 gap-4">
        <div
          className="bg-[url('../public/image01.png')] bg-cover bg-center 
        md:w-[662px] h-[416px] flex items-end rounded md:rounded-none"
        >
          <div className="md:px-6 md:pb-6 md:pt-[72px] px-4 pt-8 pb-4 flex flex-col gap-2">
            <TitleArtigo>Robótica</TitleArtigo>
            <p className="font-extrabold text-2xl line-clamp-3 w-[398px] md:w-full">
              Robôs domésticos começam a ser adotados para tarefas diárias,
              prometendo mais conforto e eficiência nas residências.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-[url('../public/image02.png')] md:w-[288px] h-[200px] flex items-end rounded md:rounded-none 
              bg-cover bg-center px-3 pb-3 pt-9"
          >
            <div className="space-y-2">
              <TitleArtigo>Hologramas</TitleArtigo>
              <p className="font-extrabold text-sm md:w-[264px] line-clamp-3">
                Novo Smartphone Projetor 3D chega ao mercado, transformando a
                forma como vemos nossas telas!
              </p>
            </div>
          </div>
          <div className="bg-[url('../public/image03.png')] md:w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end rounded md:rounded-none">
            <div className="space-y-2">
              <TitleArtigo>Internet</TitleArtigo>
              <p className="font-extrabold text-sm line-clamp-3">
                Tecnologia 6G chega às metrópoles brasileiras, prometendo
                revolucionar a forma como vivemos e nos comunicamos.
              </p>
            </div>
          </div>
          <div className="bg-[url('../public/image04.png')] md:w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end rounded md:rounded-none">
            <div className="space-y-2">
              <TitleArtigo>Vestíveis</TitleArtigo>
              <p className="font-extrabold text-sm line-clamp-3">
                Empresa lança relógio inteligente capaz de monitorar a saúde
                mental, oferecendo insights valiosos para o bem-estar pessoal.
              </p>
            </div>
          </div>
          <div className="bg-[url('../public/image05.png')] md:w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end rounded md:rounded-none">
            <div className="space-y-2">
              <TitleArtigo>Realidade Virtua</TitleArtigo>
              <p className="font-extrabold text-sm line-clamp-3">
                Escolas adotam a tecnologia VR para proporcionar experiências
                imersivas, transformando a aprendizagem tradicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
