
import SideBar from "../components/sidebar";
import ProteinSlider from "../components/protein-slider";
import SearchBar from "../components/search-bar";

import ellipseBackground from '/images/ellipse-background.png';

export default function RecipiesGenerator() {

  return (
    <div className="generalContainer flex">

      <SideBar userName={{ Name: "Dafne", LastName: "Arriagada" }} />

      <div className="ContainerBody relative h-screen grow bg-[#E5E9F0] p-[60px] z-[0] overflow-y-hidden">
        {/* P - COMPONENTE NOTIS+LOG-OUT */}

        <h1 className="text-3xl text-[#182F40] font-bold">Con hambre? busca una ... <span className="text-7xl font-extralight">Receta</span></h1>

        <div className="slider&parragraph flex justify-evenly text-[#182F40] mt-[60px]">
          <div className="flex flex-col justify-center">
            <ProteinSlider/>
            {/* CATA AGREGAR BOTÓN MORADO ACÁ */}
          </div>
          <p className="w-[300px] text-2xl">Te entregamos un listado de recetas que cumplen <span className="font-bold">casi perfectamente</span> tus requisitos</p>
        </div>

        <div className="flex justify-evenly text-[#182F40] mt-[100px]">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">Últimas recetas</div>
            <SearchBar/>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">Recetas favoritas</div>
            <SearchBar/>
          </div>
        </div>

       <img src={ellipseBackground} alt="elipse" className="absolute top-[-35%] left-[-10%] z-[-1]"/>
       <img src={ellipseBackground} alt="elipse" className="absolute top-[45%] left-[60%] z-[-1]"/>

      </div>

    </div>
  );

}