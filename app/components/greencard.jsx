// Based on Tailwind Table Tutorial: https://flowbite.com/docs/components/tables/ 
// Cols: array of column headers, Rows: array of arrays of elements, Hearts: boolean to show hearts.
export default function GreenCard(cols = [], rows = [], hearts = false) {
    const GreenCardTable = ({ columns, rows, hearts }) => {
        return(
            <table className={"GC-Table  w-full text-sm text-left rtl:text-right h-[300px] text-gray-400"}>
                <thead className={"text-xs text-gray-700 uppercase"}>
                    <tr>
                        {columns.map((col) => (
                            <th key={col} className={"GC-Table-head px-6 py-3 font-semibold"}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={"GC-Table-body"}>
                    {rows.map((row) => (
                        <tr key={row[0]} className={"GC-Table-row border-b hover:bg-[rgb(127,148,110)]"}>
                            {
                                // If there are hearts, add a column for them
                                hearts && <td className={"GC-Table-cell px-6 py-4 whitespace-nowrap"}>
                                    <div className={"GC-Table-hearts flex items-center"}>
                                        <input type="checkbox" className={"GC-Table-heart-checkbox"} />
                                    </div>

                                </td>
                            }
                            {row.map((cell) => (
                                <td key={cell} className={"GC-Table-cell px-6 py-4 whitespace-nowrap"}>{cell}</td>
                            ))}
                            {hearts && <td className={"GC-Table-cell px-6 py-4 whitespace-nowrap"}><button className={"GC-Table-heart"}>❤️</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    };

    return(
        <div className={"GreenCard relative overflow-x-auto shadow-md sm:rounded-lg flex bg-[rgb(163,190,140)]"}>
            <GreenCardTable columns={cols} rows={rows} hearts={hearts} />
        </div>
    )
}