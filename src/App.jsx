import { useState, useCallback } from "react"
import useLenis from "./hooks/useLenis"

import CustomCursor from "./components/CustomCursor"
import LoadingScreen from "./components/LoadingScreen"

// (optional components – uncomment when ready)
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import CraftsmanshipSection from "./components/CraftsmanshipSection"
// import PrecisionSection from "./components/PrecisionSection"
// import DesignSection from "./components/DesignSection"
// import ShowcaseSection from "./components/ShowcaseSection"
// import CTASection from "./components/CTASection"
// import Footer from "./components/Footer"

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // smooth scroll init
  useLenis()

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Loading screen */}
      {!loaded && (
        <LoadingScreen onComplete={handleLoadComplete} />
      )}

      {/* Main Website Content */}
      {loaded && (
        <>
          {/* Uncomment when components ready */}

          {/* <Navbar /> */}
          {/* <Hero /> */}
          {/* <CraftsmanshipSection /> */}
          {/* <PrecisionSection /> */}
          {/* <DesignSection /> */}
          {/* <ShowcaseSection /> */}
          {/* <CTASection /> */}
          {/* <Footer /> */}

          {/* TEMP fallback */}
          <div style={{ color: "black", fontSize: "30px" }}>
            LuxWatch Working ✅
          </div>
        </>
      )}
    </>
  )
}