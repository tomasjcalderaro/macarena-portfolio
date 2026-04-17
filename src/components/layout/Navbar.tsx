import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Props = {
    setOpenContact: (value: boolean) => void
    setOpenAbout: (value: boolean) => void
}

const Navbar = ({ setOpenContact, setOpenAbout }: Props) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
    <nav
        className={`fixed top-0 w-full z-50 px-8 py-4 flex justify-center items-center transition-all duration-300 ${
        scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
    >

        <ul className="flex gap-6 text-lg text-brown items-center">

            <li>
                <Link to="/">Inicio</Link>
            </li>

            <li onClick={() => setOpenAbout(true)} className="cursor-pointer">
            Sobre mí
            </li>

            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>

            <li onClick={() => setOpenContact(true)} className="cursor-pointer">
                Contacto
            </li>

        </ul>

    </nav>
    )
}

export default Navbar