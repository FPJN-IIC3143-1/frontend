
import SideBar from "../components/sidebar";
import ProteinSlider from "../components/protein-slider";
import SearchBar from "../components/search-bar";

export default function RecipiesGenerator() {

  return (
    <div className="generalContainer flex">

      <SideBar userName={{ Name: "Dafne", LastName: "Arriagada" }} />

      <div className="Container relative h-screen grow bg-[#E5E9F0] p-[60px] z-[0]">
        <h1 className="text-3xl text-[#182F40] font-bold">Con hambre? busca una ... <span className="text-7xl font-extralight">Receta</span></h1>

        {/* Slider + text*/}
        <div className="slider flex justify-evenly text-[#182F40]">
          <ProteinSlider/>
          {/* CATA AGREGAR BOTÓN MORADO ACÁ */}
          <p className="w-[300px] text-2xl">Te entregamos un listado de recetas que cumplen <span className="font-bold">casi perfectamente</span> tus requisitos</p>
        </div>

        <SearchBar/>
        
      </div>

    </div>
  );

}