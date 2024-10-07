// Cols: number of columns, Rows: rows of elements with corresponding column values, Hearts: boolean to show hearts.
export default function GreenCard(cols, rows, hearts) { 
    return(
        <div className="GreenCard w-[" + cols * 100 + "px] h-[${rows * 100}px] bg-[#A3BE8C] flex flex-item ">
            {/* inner div has padding with respect to outer GreenCard */}

        </div>
    )

}