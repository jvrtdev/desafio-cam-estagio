import React from 'react'
import CardResources from './CardResources'
import { IoMdBatteryCharging } from "react-icons/io";
import { CgPerformance } from "react-icons/cg";
import { CiCamera } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdSecurity } from "react-icons/md";


const propsCards = [
    {
        title: "Câmera Avançada",
        text: "Capture momentos inesquecíveis com a potente câmera do CamPhone.",
        id: 1,
        icon: <CiCamera />
        
    },
    {
        title: "Desempenho Poderoso",
        text: "Execute apps exigentes e multitarefas com facilidade",
        id: 2,
        icon: <CgPerformance />
    },
    {
        title: "Bateria de Longa Duração",
        text: "Fique conectado o dia todosem se preocupar com a bateria.",
        id: 3,
        icon: <IoMdBatteryCharging />
    },
    {
        title: "Design elegante",
        text: "O CamPhone combina estilo Premium com ergonomia inteligente.",
        id: 4,
        icon: <MdOutlineDesignServices />
    },
    {
        title: "Segurança Avançada",
        text: "Proteja os seus dados com recursos de segurança de última geração.",
        id: 5,
        icon: <MdSecurity />
    },

]


export default function Cards() {
    return (
    <div className='flex gap-2 flex-wrap mt-10 justify-center backdrop-filter-xl'>
        {propsCards.map((card, index) => (
            <CardResources
            key={card.id}
            icon={card.icon}
            title={card.title}
            text={card.text}
            initial={{opacity:0, scale: 0}}
            whileInView={{opacity:1 , scale: 1 }}
            exit={{opacity:0, scale: 0}}
            transition={
                {duration: 1, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{scale: 1.1}}
            />
        ))}


    </div>
    )
}
