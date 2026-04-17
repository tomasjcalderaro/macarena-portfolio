import { FaPaintBrush, FaVideo, FaCamera, FaMagic } from "react-icons/fa"

type Props = {
    setOpenAbout: (value: boolean) => void
}

const AboutModal = ({ setOpenAbout }: Props) => {
    return (
    <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        onClick={() => setOpenAbout(false)}
    >

        <div
        className="bg-beige w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 md:p-8 rounded-2xl relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
        >

        {/* Cerrar */}
        <button
            onClick={() => setOpenAbout(false)}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-brown text-lg md:text-xl hover:scale-110 transition"
        >
            ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-brown mb-3 md:mb-4 text-center">
            Sobre mí
        </h2>

        <p className="text-sm md:text-base text-brownLight mb-6 md:mb-8 text-center leading-relaxed">
            Trabajo con herramientas de diseño y edición para crear contenido
            visual atractivo y estrategias que conectan con la audiencia.
        </p>

        {/* Tools */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            <div className="flex flex-col items-center gap-2 bg-white p-3 md:p-4 rounded-xl shadow hover:scale-105 transition">
            <FaPaintBrush className="text-xl md:text-2xl text-brown" />
            <p className="text-sm md:text-base">Canva</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-3 md:p-4 rounded-xl shadow hover:scale-105 transition">
            <FaVideo className="text-xl md:text-2xl text-brown" />
            <p className="text-sm md:text-base">CapCut</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-3 md:p-4 rounded-xl shadow hover:scale-105 transition">
            <FaCamera className="text-xl md:text-2xl text-brown" />
            <p className="text-sm md:text-base">Snapseed</p>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white p-3 md:p-4 rounded-xl shadow hover:scale-105 transition">
            <FaMagic className="text-xl md:text-2xl text-brown" />
            <p className="text-sm md:text-base">PicsArt</p>
            </div>

        </div>

        </div>
    </div>
    )
}

export default AboutModal