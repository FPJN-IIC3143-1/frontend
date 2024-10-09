


export default function LandingButton({ bgColor, textColor, boxWidth, text}) {

  return <>
  
  <div 
    className="landing-button-box flex justify-center items-center h-[72px] rounded-[60px] text-4xl shadow-landingButton"
    style={{ backgroundColor: bgColor, color: textColor, width: boxWidth }}
  > 
    {text} 
    
  </div>
  
  </>
}