import { motion } from 'framer-motion'
import React from 'react'


export default function PhoneImg() {
    return (
        <motion.div
        initial={{y:-100, scale: 0, opacity:0, rotate: -180}}
        whileInView={{y:0, scale: 1, opacity:1, rotate:0}}
        transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
                duration:1,
                delay:1
            }}
        >
            <img src="/celular.png" alt="CamPhone" className="w-[400px] sm:w-[600px] sm:w-78 text-center" />
        </motion.div>
    )
}
