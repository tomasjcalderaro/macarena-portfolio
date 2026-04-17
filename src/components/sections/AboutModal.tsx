import { FaPaintBrush, FaVideo, FaCamera, FaMagic } from "react-icons/fa"

type Props = {
    setOpenAbout: (value: boolean) => void
}

    const AboutModal = ({ setOpenAbout }: Props) => {
    return (
        <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpenAbout(false)}
        >

        <div
            className="bg-beige p-8 rounded-2xl w-full max-w-2xl relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
        >

            {/* Cerrar */}
            <button
            onClick={() => setOpenAbout(false)}
            className="absolute top-4 right-4 text-brown text-xl hover:scale-110 transition"
            >
            ✕
            </button>

            <h2 className="text-3xl font-bold text-brown mb-4 text-center">
            Sobre mí
            </h2>

            <p className="text-brownLight mb-8 text-center leading-relaxed">
            Trabajo con herramientas de diseño y edición para crear contenido
            visual atractivo y estrategias que conectan con la audiencia.
            </p>

            {/* Tools */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow hover:scale-110 transition">
                <FaPaintBrush className="text-2xl text-brown" />
                <p>Canva</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow hover:scale-110 transition">
                <FaVideo className="text-2xl text-brown" />
                <p>CapCut</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow hover:scale-110 transition">
                <FaCamera className="text-2xl text-brown" />
                <p>Snapseed</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow hover:scale-110 transition">
                <FaMagic className="text-2xl text-brown" />
                <p>PicsArt</p>
            </div>

            </div>

        </div>
        </div>
    )
}

export default AboutModal