import { FaComments, FaLightbulb, FaRocket } from "react-icons/fa"

const steps = [
    {
    id: 1,
    icon: <FaComments />,
    title: "Contacto",
    desc: "Hablamos sobre tu marca, objetivos y necesidades.",
    },
    {
    id: 2,
    icon: <FaLightbulb />,
    title: "Estrategia",
    desc: "Creo un plan de contenido alineado a tu público.",
    },
    {
    id: 3,
    icon: <FaRocket />,
    title: "Ejecución",
    desc: "Diseño, publico y optimizo tu contenido constantemente.",
    },
]

const HowIWork = () => {
    return (
    <section className="bg-cream py-20 px-8">

        <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-brown mb-12">
            Cómo trabajo
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

            {steps.map((step) => (
            <div
                key={step.id}
                className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition"
            >
                <div className="text-3xl text-brown mb-4 flex justify-center">
                {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-brown mb-2">
                {step.title}
                </h3>

                <p className="text-brownLight text-sm">
                {step.desc}
                </p>
            </div>
            ))}

        </div>

        </div>

    </section>
    )
}

export default HowIWork