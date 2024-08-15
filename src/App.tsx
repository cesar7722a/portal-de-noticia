import { Header } from "./components/header";
import { TitleArtigo } from "./components/titleArtigo";

export function App() {
  return (
    <div>
      <Header />
      <div className="px-8 py-5 flex flex-col gap-20 items-center">
        <div className="flex gap-4">
          <div className="bg-[url('../public/image01.png')] bg-cover bg-center w-[608px] h-[416px] flex items-end">
            <div className="px-6 pb-6 pt-[72px] flex flex-col gap-2">
              <TitleArtigo>Robótica</TitleArtigo>
              <p className="font-extrabold text-2xl truncate">
                Robôs domésticos começam a ser adotados
                <br /> para tarefas diárias, prometendo mais
                <br /> conforto e eficiência nas residências.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
                <p className="font-extrabold text-sm truncate w-[264px]">
                  Tecnologia 6G chega às metrópoles
                  <br /> brasileiras, prometendo revolucionar
                  <br /> a forma como vivemos e nos comunicamos.
                </p>
              </div>
            </div>
            <div className="bg-[url('../public/image04.png')] w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end">
              <div className="space-y-2">
                <TitleArtigo>Vestíveis</TitleArtigo>
                <p className="font-extrabold text-sm truncate w-[264px]">
                  Empresa lança relógio inteligente
                  <br /> capaz de monitorar a saúde mental,
                  <br /> oferecendo insights valiosos para o bem-estar pessoal.
                </p>
              </div>
            </div>
            <div className="bg-[url('../public/image05.png')] w-[288px] h-[200px] bg-cover bg-center px-3 pb-3 pt-9 flex items-end">
              <div className="space-y-2">
                <TitleArtigo>Realidade Virtua</TitleArtigo>
                <p className="font-extrabold text-sm w-[264px] h-[60px] truncate">
                  Escolas adotam a tecnologia VR para <br />
                  proporcionar experiências imersivas,
                  <br /> transformando a aprendizagem tradicional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
