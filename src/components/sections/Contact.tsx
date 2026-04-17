import ContactForm from "../ui/ContactForm"

const Contact = ({ setOpenContact }: { setOpenContact: (v: boolean) => void }) => {
    return (
        <div    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={() => setOpenContact(false)}>

        <div className="bg-beige p-8 rounded-2xl w-full max-w-xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}>

            {/* ❌ Botón cerrar */}
            <button
            onClick={() => setOpenContact(false)}
            className="absolute top-4 right-4 text-brown text-xl"
            >
            ✕
            </button>

            <h2 className="text-2xl font-bold text-brown mb-6 text-center">
            Contacto
            </h2>

            <ContactForm />

        </div>

    </div>
    )
}

export default Contact