import React from 'react'

export default function NavAlbum({albums, filterPhotosByAlbum}) {
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <ul className='flex overflow-x-auto h-[50px] max-h-12 w-full'>
                {albums.map((albumId) => (
                    <li key={albumId} className='border rounded p-1 px-2 bg-cyan-600 text-white
                    active:bg-cyan-900 hover:bg-cyan-700 text-xl'>
                        <button onClick={() => filterPhotosByAlbum(albumId)}
                        >
                            {albumId}
                        </button>
                    </li>
                ))}

            </ul>
                <button onClick={() => filterPhotosByAlbum(null)}
                        className='my-5 border rounded p-1 bg-cyan-900 text-white
                        active:bg-cyan-900 hover:bg-cyan-700'>
                    Mostrar Todos
                </button>
        </div>
    )
}