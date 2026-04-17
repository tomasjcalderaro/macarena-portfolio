import { FaWhatsapp } from "react-icons/fa"

const WhatsappButton = () => {
    const phone = "5493424213747"

    const message = "Hola! Me gustaría más información 😊"

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50 animate-bounce"
    >
        <FaWhatsapp className="text-2xl" />
    </a>
    )
}

export default WhatsappButton