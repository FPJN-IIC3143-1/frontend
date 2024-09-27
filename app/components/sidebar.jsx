

export default function SideBar() {

  return (
  <div className="Container w-screen h-screen bg-[#E5E9F0]">
    <div className="ContainerSideBar w-[300px] h-screen flex flex-col bg-[#4C566A]">

      <div className="UserName-text text-2xl pt-[100px] pl-[30px]">Dafne</div>
      <div className="UserLastName-text text-2xl pl-[30px]">Arriagada</div>

      <div className="HorizontalWhiteLine w-[210px] mt-[10px] ml-[30px] h-[3px] bg-[#ffffff]"></div>
      
      <div className="PantryConfig-text mt-[25px] ml-[30px]">Configuración despensa</div>
      <div className="RecipiesGenerator-text mt-[25px] ml-[30px]">Generador de Recetas</div>
      <div className="FoodRestrictions-text mt-[25px] ml-[30px]">Preferencias Alimenticias</div>
      

      <div className="UserName-text text-xl pt-[100px] pl-[30px]">Historiales</div>
      <div className="HorizontalWhiteLine w-[210px] mt-[10px] ml-[30px] h-[3px] bg-[#ffffff]"></div>
      
      <div className="Macronutrients-text mt-[25px] ml-[30px]">Macronutrientes</div>
      <div className="IngestedFood-text mt-[25px] ml-[30px]">Alimentos Consumidos</div>

      <div className="FooterSideBar flex flex-col items-center mt-auto">
        <div className="CloseSesion-text">Cerrar Sesión</div>
        <div className="CloseSesion-text text-2xl mt-[30px] font-bold">MealsBuddy</div>
        <div className="CloseSesion-text mt-[5px] mb-[40px]">2024 ©</div>
      </div>

    </div>
  </div>);
}