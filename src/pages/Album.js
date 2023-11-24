import React, { useState, useEffect } from 'react';



const Album = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(10);
    const [currentAlbum, setCurrentAlbum] = useState(null)
    const [albums, setAlbums] = useState([])

    const fetchPhotos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            setPhotos(data); // buscando todas as fotos
            setAlbums([...new Set(data.map(photo => photo.albumId))]) //obter um unico album
            } 
            catch (error) {
            console.error('Erro ao buscar fotos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    //logica para remover foto
    const removePhoto = (photoId) => {
        const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
        setPhotos(updatedPhotos);
        localStorage.setItem('albumPhotos', JSON.stringify(updatedPhotos));
    };
    //logica para filtragem de fotos pelo id do album selecionado
    const filterPhotosByAlbum = (albumId) => {
        setCurrentAlbum(albumId);
        setCurrentPage(1)
    };
    //logica para filtrar as fotos e armazenar em uma variavel
    const filteredPhotos = currentAlbum 
    ? photos.filter((photo) => photo.albumId === currentAlbum)
    : photos;
    
    // Lógica para calcular as fotos a serem exibidas na página atual
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto)
    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='w-full h-full bg-white'>

            <NavAlbum 
            albums={albums}
            filterPhotosByAlbum={filterPhotosByAlbum}
            />

            {/* area onde é mostrado o numero do album */}
            {currentAlbum !== null 
                ? <h1 className="text-2xl text-center">
                    Album {currentAlbum}
                </h1>
                : <h1 className='text-2xl text-center'>Todas as fotos</h1>    
            }
            <CardsComponent 
            currentPhotos={currentPhotos}
            removePhoto={removePhoto}
            />

            <Pagination
                photosPerPage={photosPerPage}
                totalPhotos={photos.length}
                paginate={paginate}
                currentPage={currentPage}
                totalpages={totalPages}
            />
        </div>
    )
}