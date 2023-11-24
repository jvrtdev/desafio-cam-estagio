import React from 'react'
import PhotoCard from './PhotoCard'

export default function CardsComponent({currentPhotos, removePhoto}) {
    return (
            <div className='flex justify-center'>
                <div className='flex flex-wrap gap-2 mt-5 justify-center max-w-5xl'>
                    {currentPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} removePhoto={removePhoto} />
                    ))}
                </div>
            </div>
    )
}
