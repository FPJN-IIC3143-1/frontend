import { useNavigate } from '@remix-run/react';
import RecipePopUp from './recipePopUp';

export default function RecipeCard({boxWidth, leftRowInfo, rightRowInfo}) {
  const navigate = useNavigate();


  const handleChooseRecipe = () => {
    navigate('./choose');
  }


  return (
    <div className="container bg-[#A3BE8C] flex flex-col justify-center rounded-[20px] text-[#182F40]"
          style={{ width: boxWidth }}>
      
      <div className="topContainer flex justify-center items-center pt-6">
        <div className="leftRow flex flex-col items-center font-bold pr-[40px]">
          {leftRowInfo.map((leftInfo, index) => (
            <div key={index} className="leftItem mt-[5px] mb-[5px]">
              {leftInfo}
            </div>
          ))}
        </div>

        <div className="rightRow flex flex-col items-start">
          {rightRowInfo.map((rightInfo, index) => (
            <div key={index} className="rightRow mt-[5px] mb-[5px]">
              {rightInfo}
            </div>
          ))}
        </div>

      </div>
      
      <div className="botContainer flex flex-col justify-center items-center pb-6 pt-5">
        <RecipePopUp params={{'recNum':2, }}/>
        <button className="RecipeButton bg-[#4F378B] hover:bg-[#D0BCFE] w-[200px] h-[50px] rounded-[16px] text-[#EADDFF] hover:text-[#381E72] mt-[10px]"
          onClick={handleChooseRecipe}>
          Elegir Receta
        </button>

      </div>
    </div>
  )
}
