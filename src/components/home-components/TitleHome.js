import { motion } from 'framer-motion'
import React from 'react'

export default function TitleHome() {
    return (
    <motion.h1 className="text-white text-3xl sm:text-4xl"
    initial={{y:-100, scale: 0, opacity:0}}
        whileInView={{y:0, scale: 1, opacity:1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration:0.5
        }}
    >
        Descubra o Futuro nas Suas Mãos
    </motion.h1>
    )
}
