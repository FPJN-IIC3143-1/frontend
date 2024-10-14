import {useEffect, useState } from 'react';
import SideBar from "../components/sideBar";
import DataCard from "../components/dataCard";
import PurpleButton from "../components/purpleButton";
import NotificationLogOut from "../components/notificationLogOut";
import SearchBar from "../components/searchBar";
import { useAuth0 } from '@auth0/auth0-react';

export default function DietaryPreferences() { 
  // State to manage dietary restrictions
  const [restrictions, setRestrictions] = useState({
    celiac: false,
    lactoseIntolerant: true,
    vegan: false,
    vegetarian: false,
  });

  // Toggle restriction based on key
  const handleCheckboxChange = (key) => {
    setRestrictions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);


  return ( 
    <div className="generalContainer flex">
      <SideBar userName={{ Name: "Dafne", LastName: "Arriagada" }} />

      <div className="Container relative h-[1100px] grow bg-[#E5E9F0] p-[60px] z-[0]">
        
        <h1 className="text-3xl text-[#182F40] font-bold mt-[60px]">Bud te acompaña, tu decides ... <span className="text-7xl font-extralight">Preferencias Alimenticias</span></h1>

        <div className='flex grow flex-shrink-0 justify-evenly mt-[120px]'>
          <div className='flex flex-col'>
            <h3 className="text-3xl font-bold text-[#182F40] mb-[10px]">Bloquear alimentos</h3>
            <SearchBar/>
            </div>
            <div className="w-[300px] pl-[30px] text-xl text-[#182F40] leading-snug">
            Busca un <span className="font-bold">alimento que no te guste</span> y no lo incluiremos en tus recetas
          </div>
        </div>


        {/* Macronutrient Goals */}
        <div className="macrosContainer flex justify-evenly mt-[120px]">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#182F40] mb-[10px]">Objetivos macronutricionales</h3>
            <DataCard 
              boxWidth={300} 
              leftRowInfo={["110g", "65g", "350g", "2000kcal"]} 
              rightRowInfo={["Proteína", "Grasa", "Carbohidratos", "Calorías"]} 
            />
            <div className="h-[40px]"></div>
            <PurpleButton text="Editar objetivos"/>
          </div>

          {/* Dietary Restrictions */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#182F40] mb-[10px]">Restricciones alimentarias</h3>
            <div className="flex flex-col space-y-3">
              {[
                { label: "Celíaco/a", key: "celiac" },
                { label: "Intolerante a la lactosa", key: "lactoseIntolerant" },
                { label: "Vegano/a", key: "vegan" },
                { label: "Vegetariano/a", key: "vegetarian" },
              ].map((restriction) => (
                <div key={restriction.key} className="flex items-center text-2xl">
                 <input
                    type="checkbox"
                    checked={restrictions[restriction.key]}
                    onChange={() => handleCheckboxChange(restriction.key)}
                    className="mr-3 w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer appearance-none 
                              checked:bg-[#5B467C] checked:border-[#5B467C] relative"
                    style={{
                      backgroundColor: restrictions[restriction.key] ? '#5B467C' : '#E7E7E7',
                    }}
                  />
                   <label>{restriction.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background and Logo */}
        <img src="/images/ellipse-background.png" alt="decorative ellipse" className="absolute top-[50%] left-[50%] z-[-1]" />
        <img src="/images/logo-sin-texto.png" alt="logo" className="fixed bottom-[20px] right-[20px] w-[60px] h-[60px]" />
      </div>

      <NotificationLogOut />
    </div>
  );
}
