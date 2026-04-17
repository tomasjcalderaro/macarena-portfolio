const services = [
    {
    title: "Gestión de Redes",
    description: "Administración completa de tus redes sociales con estrategia y constancia.",
    },
    {
    title: "Publicidad Digital",
    description: "Creación y optimización de campañas para atraer más clientes.",
    },
    {
    title: "Creación de Contenido",
    description: "Diseño de contenido visual atractivo para tu marca.",
    },
]

const Services = () => {
    return (
    <section className="bg-cream py-12 md:py-16 px-4 md:px-8">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown text-center mb-8 md:mb-12">
        Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-6xl mx-auto">

        {services.map((service, index) => (
            <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition"
            >
            <h3 className="text-lg md:text-xl font-semibold text-brown mb-2 md:mb-3">
                {service.title}
            </h3>

            <p className="text-sm md:text-base text-brownLight leading-relaxed">
                {service.description}
            </p>
            </div>
        ))}

        </div>

    </section>
    )
}

export default Services