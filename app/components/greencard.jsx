// Based on Tailwind Table Tutorial: https://flowbite.com/docs/components/tables/ 
// Cols: array of column headers, Rows: array of arrays of elements, checkbox: boolean to show checkbox.
export default function GreenCard({rows = [], checkbox = false}) {
    const GreenCardTable = ({ rows, checkbox }) => {
        return(
            <table className={"GC-Table  w-full text-sm text-left rtl:text-right h-[300px]"}>
                
                <tbody className={"GC-Table-body"}>
                    {rows.map((row) => (
                        <tr key={row} className={"GC-Table-row border-b hover:bg-[rgb(127,148,110)]"}>
                            {
                                // If there are checkbox, add a column for them
                                checkbox && <td className={"GC-Table-cell px-6 py-4 whitespace-nowrap"}>
                                    <div className={"GC-Table-checkbox flex items-center"}>
                                        <input type="checkbox" className={"GC-Table-heart-checkbox"} />
                                    </div>
                                </td>
                            }
                            <td key={row[0]} className={"GC-Table-cell font-bold px-6 py-4 whitespace-nowrap"}>{row[0]}</td>
                            <td key={row[1]} className={"GC-Table-cell px-6 py-4 whitespace-nowrap"}>{row[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    };

    return(
        <div className={"GreenCard relative overflow-x-auto shadow-md sm:rounded-lg flex bg-[rgb(163,190,140)]"}>
            <GreenCardTable rows={rows} checkbox={checkbox} />
        </div>
    )
}