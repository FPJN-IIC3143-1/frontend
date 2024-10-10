export const meta = () => {
  return [
    { title: "MealsBuddy" },
    { name: "MealsBuddy", content: "Bienvenido/a a MealsBuddy!" },
  ];
};

import LandingButton from "../components/landingButton";
import { useAuth0 } from '@auth0/auth0-react';

export default function Index() { 

 
const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
      <button
        style={{
          backgroundColor: "#4F378B",
          color: "#EADDFF",
          width: "428px",
          height: "72px",
          borderRadius: "60px",
          fontSize: "24px",
          cursor: "pointer",
          border: "5px solid red" // Añade un borde rojo para hacerlo visible
        }}
        onClick={() => {
          console.log("Button clicked!");
        }}
      >
        Regístrate
      </button>

      {/* <div className="flex justify-start items-center space-x-[50px] pt-[40px]"> 
      <button
        style={{
          backgroundColor: "#4F378B",
          color: "#EADDFF",
          width: "428px",
          height: "72px",
          borderRadius: "60px",
          fontSize: "24px",
          cursor: "pointer"
        }}
        onClick={() => {
          console.log("Signup button clicked");
          loginWithRedirect({ screen_hint: "signup" });
        }}
      >
        Regístrate
      </button>

      <button
        style={{
          backgroundColor: "#CCC2DC",
          color: "#381E72",
          width: "319px",
          height: "72px",
          borderRadius: "60px",
          fontSize: "24px",
          cursor: "pointer"
        }}
        onClick={() => {
          console.log("Login button clicked");
          loginWithRedirect();
        }}
      >
        Iniciar Sesión
      </button>
    </div> */}

      
      
      {/* Círculos morados en el fondo */}
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[10%] left-[80%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[35%] left-[70%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[40%] left-[90%] z-[-10]"/>
      <img src="/images/ellipse-landingpage.png" alt="elipse" className="fixed top-[55%] left-[65%] z-[-10]"/>

      {/* Círculo grande */}
      <img src="/images/gran-ellipse-landing.png" alt="elipse" className="fixed top-[77%] right-[0%] z-[-10]"/>

      {/* Logo */}
      <img src="/images/logo-con-titulo.png" alt="elipse" className="w-[522px] h-[126px] mt-[140px] z-[1]"/>
    </div>
  );
}
