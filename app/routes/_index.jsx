export const meta = () => {
  return [
    { title: "MealsBuddy" },
    { name: "MealsBuddy", content: "Bienvenido/a a MealsBuddy!" },
  ];
};

import LandingButton from "../components/landingButton";

export default function Index() { 
  return ( 
    <div className="Background relative bg-[#E5E9F0] w-screen h-screen pt-[100px] pl-[60px] pr-[60px] z-[1]">
      {/* Texto principal */}
      <div className="text-9xl font-bold text-[#182F40] max-w-[1360px]"> 
        Asesorate con el mejor* food-tracker del mercado.
      </div> 
      <div className="text-4xl text-[#182F40] pt-[15px]"> 
        *Según nosotros, porque sí, la ocupamos. 
      </div>
    
      {/* Botones */}
      <div className="flex justify-start items-center space-x-[60px] pt-[40px]"> 
        <LandingButton bgColor="#4F378B" textColor="#EADDFF" boxWidth={428} text="Regístrate"/>
        <LandingButton bgColor="#CCC2DC" textColor="#381E72" boxWidth={319} text="Iniciar Sesión"/>
      </div>

      {/* Círculos morados en el fondo */}
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[10%] left-[80%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[35%] left-[70%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[40%] left-[90%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[55%] left-[65%] z-[-10]"/>

      {/* Círculo grande */}
      <img src="/images/gran-ellipse-landing.png" alt="elipse" className="fixed top-[75%] right-[0%] z-[-10]"/>

      {/* Logo */}
      <img src="/images/logo-con-titulo.png" alt="elipse" className="w-[522px] h-[126px] mt-[140px] z-[1]"/>
    </div>
  );
}
