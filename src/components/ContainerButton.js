import React from 'react'
import { FaInfo, FaRegTrashAlt } from 'react-icons/fa'
import ButtonAction from './ButtonAction'


export default function ContainerButton({removePhoto, openModal, photo}) {
        return (
        <div className="flex mt-1 justify-between">
            <ButtonAction
            action={openModal}>
                <FaInfo />
            </ButtonAction>

            <ButtonAction 
            action={() => removePhoto(photo.id)}>
                <FaRegTrashAlt />
            </ButtonAction>
        </div>
    )
}
