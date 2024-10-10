

export default function SideBar({ userName }) {

  const mouseEnteranimation = (e) => {
    e.target.style.color = "#D0BCFE"
  }

  const mouseLeaveanimation = (e) => {
    e.target.style.color = "#ffffff"
  }

  return (
    <div className="ContainerSideBar w-[300px] h-screen flex flex-col items-start pl-[30px] bg-[#4C566A]">

      <div className="UserName-text text-2xl pt-[100px] ">{userName.Name}</div>
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
        <button className="CloseSesion-text" onMouseEnter={mouseEnteranimation} onMouseLeave={mouseLeaveanimation}>Cerrar Sesión</button>
        <div className="CloseSesion-text text-2xl mt-[30px] font-bold">MealsBuddy</div>
        <div className="CloseSesion-text mt-[5px] mb-[40px]">2024 ©</div>
      </div>

    </div>
);
}