import { motion } from "framer-motion"
import macarenaImg from "../../assets/macarena.jpg"

type Props = {
    setOpenContact: (value: boolean) => void
}

const Hero = ({ setOpenContact }: Props) => {
    return (
    <section className="bg-cream min-h-[80vh] flex items-center px-4 md:px-8 overflow-hidden">

        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">

        {/* TEXTO */}
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
        >

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brown mb-4 md:mb-6 leading-tight">
            Potenciá tu marca en redes sociales
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-brownLight mb-6 md:mb-8 leading-relaxed">
            Ayudo a marcas a crecer con estrategias de contenido,
            diseño y gestión profesional.
            </p>

            <button
            onClick={() => setOpenContact(true)}
            className="bg-brown text-white px-6 py-3 rounded-xl hover:bg-brownLight transition hover:scale-105"
            >
            Contactame
            </button>

        </motion.div>

        {/* IMAGEN */}
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
        >

            <img
            src={macarenaImg}
            alt="Macarena"
            className="w-[220px] sm:w-[280px] md:w-[380px] rounded-2xl shadow-xl object-cover"
            />

        </motion.div>

        </div>

    </section>
    )
}

export default Hero