import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import About from "../components/sections/About"
import HowIWork from "../components/sections/HowIWork"
import Portfolio from "../components/sections/Portfolio"
import CTA from "../components/sections/CTA"

type Props = {
    setOpenContact: (value: boolean) => void
    setOpenAbout: (value: boolean) => void
}

const Home = ({ setOpenContact, setOpenAbout }: Props) => {
    return (
        <div className="pt-24">
        <Hero setOpenContact={setOpenContact} />
        <Services />
        <About setOpenAbout={setOpenAbout} />
        <HowIWork />
        <Portfolio />
        <CTA setOpenContact={setOpenContact} />
    </div>
    )
}

export default Home