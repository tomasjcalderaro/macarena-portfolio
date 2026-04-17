import { motion } from "framer-motion"

type Props = {
    setOpenAbout: (value: boolean) => void
}

const About = ({ setOpenAbout }: Props) => {
    return (
    <section className="bg-beige py-20 px-4 md:px-8">

        <div className="flex flex-col items-center text-center gap-6 md:gap-10 max-w-4xl mx-auto">

        {/* VIDEO */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
        >
            <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-xl w-full object-cover"
            >
            <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6">
            Sobre mí
            </h2>

            <p className="max-w-md mx-auto text-center text-sm md:text-base text-brownLight mb-6 md:mb-8 leading-relaxed">
            Soy Macarena, Community Manager enfocada en crear contenido
            visual atractivo y estrategias que hacen crecer marcas en redes.
            </p>

            <motion.button
            onClick={() => setOpenAbout(true)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true }}
            className="bg-brown text-white px-6 py-3 rounded-xl hover:bg-brownLight transition mx-auto block"
            >
                Ver más
            </motion.button>
            </motion.div>

        </div>

    </section>
    )
}

export default About