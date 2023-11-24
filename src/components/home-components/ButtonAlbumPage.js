import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonAlbumPage() {
    return (
    <div>
        <Link to="/album">
            <button className="animate ease-in-out duration-300 border p-5
                mt-10 rounded-xl text-xl bg-neutral-800 text-white animate-bounce"> 
                Álbum de Fotos
            </button>
            </Link>
    </div>
    )
}
