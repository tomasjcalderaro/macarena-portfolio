import macarenaImg from "../../assets/macarena.jpg"
import pilateszenImg from "../../assets/pilateszen.jpg"
import merbaImg from "../../assets/merba.jpg"
import bymanonImg from "../../assets/bymanon.jpg"
import elevaImg from "../../assets/eleva.jpg"
import { motion } from "framer-motion"

const projects = [
    { id: 1, image: pilateszenImg, title: "PilatesZen", url: "https://www.instagram.com/pilateszen.colastine" },
    { id: 2, image: merbaImg, title: "Proyecto 2", url: "https://www.instagram.com/merba.sf" },
    { id: 3, image: bymanonImg, title: "Proyecto 3", url: "https://www.instagram.com/bymanonsantafe" },
    { id: 4, image: elevaImg, title: "Proyecto 4", url: "https://www.instagram.com/eleva_sportwear" },
    { id: 5, image: macarenaImg, title: "Proyecto 5", url: "#" },
    { id: 6, image: macarenaImg, title: "Proyecto 6", url: "#" },
]

const container = {
    hidden: {},
    show: {
    transition: {
        staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

const Portfolio = () => {
    return (
    <section id="portfolio" className="bg-cream py-16 px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-brown text-center mb-12">
        Portfolio
        </h2>

        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >

        {projects.map((project) => (
            <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="relative overflow-hidden rounded-2xl shadow-md group block hover:scale-[1.02] transition"
            >

            <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                {project.title}
                </p>
            </div>

            </motion.a>
            ))}

        </motion.div>

    </section>
    )
}

export default Portfolio
