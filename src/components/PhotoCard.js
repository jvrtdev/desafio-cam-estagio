import { useState } from "react";
import Modal from "./Modal";
import ContainerButton from "./ContainerButton";



const PhotoCard = ({ photo, removePhoto }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="border border-slate-300 bg-neutral-100 shadow p-2 rounded-md ">
            <img src={photo.thumbnailUrl} alt={photo.title}
            onClick={openModal}
            className="cursor-pointer"
            />

            <ContainerButton 
            removePhoto={removePhoto}
            openModal={openModal}
            photo={photo}
            />

            <Modal 
            modalOpen={modalOpen}
            closeModal={closeModal}
            photo={photo}
            />
        </div>
    );
};

export default PhotoCard