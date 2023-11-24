import React from 'react'
import ReactModal from 'react-modal'
import { IoMdClose } from "react-icons/io";

ReactModal.setAppElement('#root')
export default function Modal({modalOpen,closeModal, photo}) {
    return (
        <ReactModal
        isOpen={modalOpen}
        style={
            {content: {backgroundColor: 'white'}, 
            overlay: {border: 'none'}}
        }>   
            <div className="flex flex-col items-center">
                <button onClick={closeModal} className="absolute right-0 top-0">
                    <IoMdClose className="text-4xl"/>
                </button>
                <img src={photo.url} alt={photo.title} width={600} />
                <h1 className="text-2xl mt-2">Detalhes:</h1>
                <p className="text-xl font-mono">{photo.title}</p>
            </div>
        </ReactModal>
    )
}
