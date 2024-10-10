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
    <div className="Container relative flex-grow h-screen bg-[#E5E9F0] p-[60px]">
      <div className="text-4xl text-[#182F40]">Bienvenido/a, Dafne!</div>

      <div className="text-3xl text-[#182F40] font-bold">Macros de hoy</div>
      <DataCard leftRowInfo={["80g", "200g", "50g", "2013kcal"]} rightRowInfo={["Proteínas", "Carbohidratos", "Grasas", "Calorías"]} />

      <div className="text-3xl text-[#182F40] font-bold">Estado despensa</div>

      <div className="text-3xl text-[#182F40] font-bold">Últimas notificaciones</div>

      
      <img src="/images/ellipse-background.png" alt="elipse" className="fixed top-[50%] left-[50%]"/>

      <img src="/images/logo-sin-texto.png" alt="elipse" className="fixed top-[80%] left-[90%]"/>

      

    </div>
  </div>
);
}