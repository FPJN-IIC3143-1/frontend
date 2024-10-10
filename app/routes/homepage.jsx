import {
  // Links,
  // Meta,
  // Outlet,
  // Scripts,
  // ScrollRestoration,
} from "@remix-run/react";

import SideBar from "../components/sidebar"; 
import DataCard from "../components/data-card";


export default function HomePage() { 
  return ( 
  <div className="generalContainer flex">
    <SideBar userName={{ Name: "Dafne", LastName: "Arriagada" }} />
    <div className="Container relative h-screen grow bg-[#E5E9F0] p-[60px]">
      <h1 className="text-4xl text-[#182F40]">Bienvenido/a, Dafne!</h1>

      {/*Data Cards*/}

      <div className="macros&pantryBox flex pt-[100px]">
        <div className="macrosBox flex flex-col items-center ">
          <div className="text-3xl text-[#182F40] font-bold pb-[5px]">Macros de hoy</div>
          <DataCard boxWidth={340} leftRowInfo={["80g", "200g", "50g", "2013kcal"]} rightRowInfo={["Proteínas", "Carbohidratos", "Grasas", "Calorías"]} />
          {/* CATA AGREGAR BOTÓN MORADO ACÁ */}
        </div>
        <div className="pantryBox flex flex-col items-center ">
          <div className="text-3xl text-[#182F40] font-bold pb-[5px]">Estado despensa</div>
          <DataCard  boxWidth={340} leftRowInfo={["2", "1L", "500g", "300g"]} rightRowInfo={["Huevos", "Leche Descremada", "Arroz", "Vacuno"]} />
          {/* CATA AGREGAR BOTÓN MORADO ACÁ */}
        </div>
      </div>

      <div className="notificationsBox flex flex-col pt-[100px]">
        <div className="text-3xl text-[#182F40] font-bold pb-[5px] pl-[50px]">Últimas notificaciones</div>
        <DataCard  boxWidth={830} leftRowInfo={["09/09/2024", "07/09/2024", "07/09/2024", "07/09/2024"]} rightRowInfo={["Tus ingredientes frecuentes no están en tu despensa!", "No tienes pimiento!", "No hay yogurt para tus desayunos", "Se agotó el arroz en tu despensa!"]} />
    
      </div>



      
      <img src="/images/ellipse-background.png" alt="elipse" className="fixed top-[50%] left-[50%]"/>

      <img src="/images/logo-sin-texto.png" alt="elipse" className="fixed top-[80%] left-[90%]"/>

      

    </div>
  </div>
);
}