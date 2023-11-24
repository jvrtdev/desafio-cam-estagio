import React from 'react'

export default function PaginationButtons({paginate, currentPage, totalpages}) {
    return (
        <> 
            {<button onClick={() => paginate(1)}
            className="border rounded p-1 bg-cyan-600 text-white
            active:bg-cyan-900 hover:bg-cyan-700 shadow">
                Primeira
            </button>}
            {currentPage !== 1 ? <button onClick={() => paginate(currentPage - 1)}
            className="border rounded p-1 px-2 bg-cyan-600 text-white
            active:bg-cyan-900 hover:bg-cyan-700 shadow">
                {currentPage - 1}
            </button>
            : ""}

            <button className="border rounded p-1 px-2 bg-cyan-900 text-white
            active:bg-cyan-900 hover:bg-cyan-700 shadow">
            {currentPage}
            </button> {/* botao mostrador da pagina atual */}

            {currentPage !== totalpages ? <button onClick={() => paginate(currentPage + 1)}
            className="border rounded p-1 px-2 bg-cyan-600 text-white
            active:bg-cyan-900 hover:bg-cyan-700 shadow"
            >
                {currentPage + 1
            }</button>
            : ""
            }

            {<button onClick={() => paginate(totalpages)}
            className="border rounded p-1 bg-cyan-600 text-white
            active:bg-cyan-900 hover:bg-cyan-700 shadow">
                Ultima
            </button> 
            }
        </>
    )
}
