type Props = {
    setOpenContact: (value: boolean) => void
}

const CTA = ({ setOpenContact }: Props) => {
    return (
    <section className="bg-brown text-white py-20 px-8 text-center">

        <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tu marca al siguiente nivel?
        </h2>

        <p className="mb-8 text-white/80">
            Trabajemos juntos para crear contenido que conecte con tu audiencia
            y haga crecer tu negocio.
        </p>

        <button
            onClick={() => setOpenContact(true)}
            className="bg-white text-brown px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
            Contactame ahora
        </button>

        </div>

    </section>
    )
}

export default CTA