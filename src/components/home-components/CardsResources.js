import { motion } from "framer-motion"


export default function CardResources({icon, title, text, id, ...props}) {
    return (
    <motion.div className="h-52 w-60 bg-sky-200 p-2 rounded-xl shadow-xl" key={id}
    {...props}
    >
        <i className="text-4xl">{icon}</i>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{text}</p>
    </motion.div>
    )
}
