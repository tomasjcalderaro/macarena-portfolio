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
    <section className="bg-cream py-16 px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-brown text-center mb-12">
        Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {services.map((service, index) => (
            <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
            <h3 className="text-xl font-semibold text-brown mb-3">
                {service.title}
            </h3>

            <p className="text-brownLight">
                {service.description}
            </p>
            </div>
        ))}

        </div>
    </section>
    )
}

export default Services