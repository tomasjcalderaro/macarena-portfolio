import { useState } from "react"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phone = "5493424213747"

    const text = `Hola Macarena! 👋%0A%0ASoy ${name}%0AEmail: ${email}%0A%0A${message}`

    const url = `https://wa.me/${phone}?text=${text}`

    window.open(url, "_blank")
    }

    return (
    <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-xl mx-auto animate-fadeIn"
    >

        <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded-lg border border-brownLight focus:outline-none focus:ring-2 focus:ring-brown transition"
        required
        />

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg border border-brownLight focus:outline-none focus:ring-2 focus:ring-brown transition"
        required
        />

        <textarea
        placeholder="Mensaje"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-3 rounded-lg border border-brownLight focus:outline-none focus:ring-2 focus:ring-brown transition"
        required
        />

        <button
        type="submit"
        className="bg-brown text-white py-3 rounded-xl hover:bg-brownLight transition duration-300 hover:scale-[1.02]"
        >
        Enviar mensaje
        </button>

    </form>
    )
}

export default ContactForm