export default function PurpleButton({ bgColor = '57458F', textColor = '#FFFFFF', boxWidth = 'auto', text, onClick }) {
    return (
      <button 
        className="flex justify-center items-center h-[48px] rounded-full text-lg font-medium px-6 transition-colors duration-300"
        style={{ backgroundColor: bgColor, color: textColor, width: boxWidth }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#7461AC";
          e.target.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = bgColor;
          e.target.style.color = textColor;
        }}
        onClick={onClick}
      > 
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h2a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v2m-9 7h8a2 2 0 0 0 2-2v-5.586a2 2 0 0 0-.586-1.414l-6-6A2 2 0 0 0 9.414 4H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm-2-1V14H3v5h5v-2z" />
        </svg>
        {text}
      </button>
    );
  }