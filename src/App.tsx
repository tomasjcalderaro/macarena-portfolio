import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Contact from "./components/sections/Contact"
import AboutModal from "./components/sections/AboutModal"

import Home from "./pages/Home"
import PortfolioPage from "./pages/PortfolioPage"

function App() {
  const [openContact, setOpenContact] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)

  return (
    <div className="bg-cream min-h-screen">

      <Navbar 
        setOpenContact={setOpenContact}
        setOpenAbout={setOpenAbout}
      />

      <Routes>
        <Route 
          path="/" element={
            <Home 
              setOpenContact={setOpenContact}
              setOpenAbout={setOpenAbout}
            />
          } 
        />

        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      <Footer />

      {openContact && (
        <Contact setOpenContact={setOpenContact} />
      )}

      {openAbout && (
        <AboutModal setOpenAbout={setOpenAbout} />
      )}

    </div>
  )
}

export default App