
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import arrowLeft from '/images/arrow-left-circle.png';
import arrowRight from '/images/arrow-right-circle.png';

// 0. Entender pq se ensancha solo X
// 1. Q se esconda solo @media
// 2. q se pueda abrir y cerrar a gusto
// 3. agregar ruteo a todas las entradas


export default function SideBar({ userName }) {

  const { logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  const mouseEnteranimation = (e) => {
    e.target.style.color = "#D0BCFE"
  }

  const mouseLeaveanimation = (e) => {
    e.target.style.color = "#ffffff"
  }

  return ( <>
      
    <button
      className={`OpenOrHide fixed top-[30px] z-50 transform transition-all duration-300 ease-in-out
        ${isOpen ? 'left-[250px]' : 'left-[20px]'}
      `}
      onClick={toggleSideBar}
    >
      {isOpen ? (
        <img src={arrowLeft} alt="Hide side bar" />
      ) : (
        <img src={arrowRight} alt="Show side bar" />
      )}
    </button>

      <div
        className={`ContainerSideBar h-screen bg-[#4C566A] flex-shrink-0 flex flex-col items-start pl-[30px] transform transition-all duration-300 ease-in-out
          ${isOpen ? 'w-[320px]' : 'w-[80px]'}
        `}
      >
      {isOpen ? 
      <>
      <div className="UserName-text text-2xl pt-[120px] ">{userName.Name}</div>
      <div className="UserLastName-text text-2xl">{userName.LastName}</div>

      <div className="HorizontalWhiteLine w-[210px] mt-[10px] h-[3px] bg-[#ffffff]"></div>
      
      <button className="PantryConfig-text mt-[25px]" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Configuración despensa</button>
      <button className="RecipiesGenerator-text mt-[25px]" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Generador de Recetas</button>
      <button className="FoodRestrictions-text mt-[25px]" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Preferencias Alimenticias</button>
      

      <div className="UserName-text text-xl pt-[100px]">Historiales</div>
      <div className="HorizontalWhiteLine w-[210px] mt-[10px] h-[3px] bg-[#ffffff]"></div>
      
      <button className="Macronutrients-text mt-[25px]" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Macronutrientes</button>
      <button className="IngestedFood-text mt-[25px]" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Alimentos Consumidos</button>

      <div className="FooterSideBar flex flex-col w-[235px] items-center mt-auto">
        <button 
          className="CloseSesion-text" 
          onMouseEnter={mouseEnteranimation} 
          onMouseLeave={mouseLeaveanimation} 
          onClick={() => logout({ returnTo: "http://localhost:5173/homepage" })}
          >
          Cerrar Sesión
        </button>
        <div className="CloseSesion-text text-2xl mt-[30px] font-bold">MealsBuddy</div>
        <div className="CloseSesion-text mt-[5px] mb-[40px]">2024 ©</div>
      </div>

      </>
      : '' }
      
    </div>
  </>
);
}