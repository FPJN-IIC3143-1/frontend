export default function PurpleButton({ bgColor = '57458F', textColor = '#FFFFFF', boxWidth = 'auto', text, onClick }) {
    return (
      <button 
        className="flex justify-center items-center h-[48px] rounded-full text-lg font-medium px-6 transition-colors duration-300"
        style={{ backgroundColor: bgColor, color: textColor, width: boxWidth }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#7461AC";
          e.target.style.color = "#381E72";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = bgColor;
          e.target.style.color = textColor;
        }}
        onClick={onClick}
      > 
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
        {text}
      </button>
    );
  }