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
}