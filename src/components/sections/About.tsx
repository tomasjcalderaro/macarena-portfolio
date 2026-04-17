import { motion } from "framer-motion"

type Props = {
    setOpenAbout: (value: boolean) => void
}

const About = ({ setOpenAbout }: Props) => {
    return (
    <section className="bg-beige py-20 px-8">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* VIDEO */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 80 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6">
            Sobre mí
            </h2>

            <p className="text-brownLight leading-relaxed mb-6">
            Soy Macarena, Community Manager enfocada en crear contenido
            visual atractivo y estrategias que hacen crecer marcas en redes.
            </p>

            <motion.button
            onClick={() => setOpenAbout(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-brown text-white px-6 py-3 rounded-xl hover:bg-brownLight transition hover:scale-105"
            >
                Ver más
            </motion.button>
            </motion.div>

        </div>

    </section>
    )
}

export default About