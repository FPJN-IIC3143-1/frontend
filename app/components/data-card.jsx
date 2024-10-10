


export default function DataCard({leftRowInfo, rightRowInfo}) {

    return (
      <div className="container bg-[#A3BE8C] flex justify-center items-center w-[340px] h-[170px] rounded-[20px] text-[#182F40]">
        
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
    )


}
