import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SideBar from "../components/sideBar"

export default function History() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

 
  return (
    <div className="flex">
      <SideBar userName={{ Name: "Dafne", LastName: "Arriagada" }} />

      <div className="relative h-screen grow bg-[#E5E9F0] p-10">
        
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-[#182F40] text-center mb-8 leading-snug">
          Tus secretos solo conocidos por los ... <span className="block text-5xl font-light">Historiales</span>
        </h1>

        {/* Macronutrients Section */}
        <div className="mt-8 flex items-start space-x-10">
          {/* Section Title */}
          <div className="text-4xl font-bold text-[#182F40] mr-8">
            <p>Macro</p>
            <p className="text-4xl font-light">nutrientes</p>
          </div>
          {/* Labels */}
          <div className="text-lg font-semibold text-[#182F40] space-y-2 pt-2">
            <p>Proteína</p>
            <p>Grasa</p>
            <p>Carbohidratos</p>
            <p>Calorías</p>
          </div>
          {/* Macronutrient Cards */}
          <div className="flex space-x-5">
            {[
              { label: "Esta semana", values: ["300g", "40g", "420g", "8300kcal"] },
              { label: "Semana pasada", values: ["570g", "110g", "820g", "12100kcal"] },
              { label: "Este mes", values: ["2.3kg", "340g", "2.4kg", "47030kcal"] },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-[#A3BE8C] rounded-md text-[#182F40] text-center shadow-sm w-[150px] hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-base font-semibold mb-1">{item.label}</h3>
                <div className="text-sm font-medium space-y-1">
                  {item.values.map((value, idx) => (
                    <p key={idx} className={idx === item.values.length - 1 ? 'font-bold' : ''}>{value}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alimentos Consumidos Section */}
        <div className="mt-8 flex items-start space-x-10">
        <div className="text-4xl font-bold text-[#182F40] mr-8">
            <p>Alimentos</p>
            <p className="text-4xl font-light">consumidos</p>
          </div>
          
          <div className="flex space-x-5">
            {[
              { label: "Esta semana", items: ["0.5 Broccoli", "2 Tomates", "400g Vacuno", "230g Arroz", "20g Chía"] },
              { label: "Semana pasada", items: ["1 Lechuga", "2 Limones", "350g Pescado", "2 Tomates", "2 Zanahorias"] },
              { label: "Este mes", items: ["8 Tomates", "15 Yogurt N.", "350g Pescado", "400g Vacuno", "2 Zanahorias"] },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-[#A3BE8C] rounded-md text-[#182F40] text-center shadow-sm w-[150px] hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-base font-semibold mb-1">{item.label}</h3>
                <div className="text-sm font-medium space-y-1">
                  {item.items.map((food, idx) => (
                    <p key={idx}>{food}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Background */}
        <img src="/images/ellipse-background.png" alt="decorative ellipse" className="absolute top-[-10%] left-[-5%] w-1/4 z-[-1] opacity-40" />
        
        {/* Logo */}
        <img src="/images/logo-sin-texto.png" alt="logo" className="fixed bottom-5 right-5 w-12 h-12 opacity-70" />
      </div>
    </div>
  );
}
