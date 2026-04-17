import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
    <footer className="bg-brown text-white py-10 px-8 mt-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Marca */}
        <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Macarena</h3>
            <p className="text-sm text-white/70">
            Community Manager
            </p>
        </div>

            {/* Redes */}
            <div className="flex gap-6 text-xl">

            <a
                href="https://instagram.com/macaolmedoo"
                target="_blank"
                className="hover:scale-125 hover:animate-bounceIcon transition"
            >
                <FaInstagram />
            </a>

            <a
            href="https://wa.me/5490000000000"
            target="_blank"
            className="hover:scale-125 hover:animate-bounceIcon transition"
            >
                <FaWhatsapp />
            </a>

            <a
                href="maca.olmedo@hotmail.com"
                className="hover:scale-125 hover:animate-bounceIcon transition"
            >
                <FaEnvelope />
            </a>

            </div>

        </div>

        {/* Línea */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Macarena. Todos los derechos reservados.
        </div>

        </footer>
    )
}

export default Footer