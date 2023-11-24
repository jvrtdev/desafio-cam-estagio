import { motion } from 'framer-motion'
import React from 'react'


export default function DescriptionHome() {
    return (
        <motion.p className="text-white text-xl text-center sm:text-2xl"
        initial={{scale: 0, opacity:0}}
        whileInView={{scale: 1, opacity:1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration:1
        }}
        >
            Dê vida ao seu dia com o CamPhone. Este dispositivo de última geração
            redefine a experiência móvel, proporcionando desempenho excepcional,
            câmeras de ponta e uma bateria que acompanha seu ritmo. Com design
            elegante e inovações tecnológicas, o CamPhone é mais do que um celular
            - é uma declaração de estilo e funcionalidade.
        </motion.p>
    )
}
