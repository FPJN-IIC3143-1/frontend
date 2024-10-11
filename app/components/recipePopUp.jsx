import { useNavigate } from "@remix-run/react";

export default function RecipePopUp(params) {
  // Proceso params para mostrar receta
  const { num, title, ingredients, steps } = params;

  // logica para mostrar la receta
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate('./recipe');
  };

  return(
    <>
      <button className="RecipeButton bg-[#4F378B] hover:bg-[#D0BCFE] w-[220px] h-[53px] rounded-[16px] text-[#EADDFF] hover:text-[#381E72]"
        onClick={handleViewRecipe}>
        Ver Receta Completa
      </button>

      <div className="RecipePopUpContainer bg-gray-900 bg-opacity-50 w-full h-full rounded-[20px] m-[2px]
          flex absolute top-0 right-0 left-0 bottom-0">
        <div className="RecipePopUp flex justify-center items-center bg-[#4F378B] w-[600px] h-[90%] rounded-[20px] m-auto p-10">
          <div className="RecipePopUpHeader flex flex-col justify-center items-left w-full h-[10%]">
            <div className="text-2xl text-gray-100 font-bold font-serif">Receta {num}:</div>
            <div className="RecipeTitle text-gray-300 text-4xl text-gray-150 ">{title}</div>
            <div className="text-xl text-gray-100 mt-5 font-serif">Ingredientes:</div>
            {/* Mapeo de ingredientes */}
            <div className="RecipeIngredients text-gray-300 text-lg text-gray-150">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="IngredientItem">{ingredient}</div>
              ))}
            </div>

            
          </div> 
        </div>
      </div>
    </>
  )
}
