export const meta = () => {
  return [
    { title: "MealsBuddy" },
    { name: "MealsBuddy", content: "Bienvenido/a a MealsBuddy!" },
  ];
};

export default function Index() {
  return ( 
  <div className="Background bg-[#E5E9F0] w-screen h-screen">
    <div className="text-9xl font-bold text-[#182F40] pt-[100px] pl-[60px] pr-[60px] max-w-[1360px]"> Asesorate con el mejor* food-tracker del mercado.</div> 
    <div className="text-4xl text-[#182F40] pt-[15px] pl-[60px]"> *Según nosotros, porque sí, la ocupamos. </div>
    <img src="/images/ellipse-landingpage.png" alt="elipse" className="w-[105px] h-[105px]"/>
    <img src="/images/logo-con-titulo.png" alt="elipse" className="w-[522px] h-[126px]"/>
  </div>
  );
}


