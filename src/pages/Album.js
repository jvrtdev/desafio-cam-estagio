import React, { useState, useEffect } from 'react';



const Album = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(10);
    const [currentAlbum, setCurrentAlbum] = useState(null)
    const [albums, setAlbums] = useState([])

}