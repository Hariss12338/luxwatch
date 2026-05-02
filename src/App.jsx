export default function App() {
  return (
    <div style={{color: "black", fontSize: "30px"}}>
      LuxWatch Working ✅
    </div>
  );
}
/**
 * App — Root component.
 *
 * Layout order:
 *   LoadingScreen (unmounts after animation)
 *   → Navbar
 *   → Hero (3D watch + big headline)
 *   → CraftsmanshipSection
 *   → PrecisionSection (stats + movement diagram)
 *   → DesignSection (detail panels)
 *   → ShowcaseSection (pinned scroll-rotated 3D watch)
 *   → CTASection (collection grid + buy CTA)
 *   → Footer
 */
export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Initialise Lenis smooth scroll
  useLenis()

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Custom luxury cursor */}
      <CustomCursor />

      {/* Loading screen — unmounts itself after animation */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content */}
      <div
        className="min-h-screen bg-black"
        style={{
          visibility: loaded ? 'visible' : 'hidden',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <CraftsmanshipSection />
          <PrecisionSection />
          <DesignSection />
          <ShowcaseSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
