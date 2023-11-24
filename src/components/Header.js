import { Link } from "react-router-dom"


export default function Header() {
    return (
        <header className="bg-sky-400 w-full h-16 flex items-center justify-center">
            <ul className="flex gap-2 text-2xl font-bold text-white">
                <li className="hover:text-cyan-800 duration-500 transition ease-in-out"><Link to="/">Home</Link></li>
                <li className="hover:text-cyan-800 duration-500 transition ease-in-out"><Link to="/album">Álbum</Link></li>
            </ul>
        </header>
    )
}
