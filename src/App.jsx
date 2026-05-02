import { useState, useCallback } from "react";
import useLenis from "./hooks/useLenis";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // smooth scroll init (safe even if hook is empty)
  useLenis && useLenis();

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Noise overlay (optional CSS) */}
      <div className="noise-overlay" />

      {/* Custom cursor (keep if component exists) */}
      <CustomCursor />

      {/* Loading screen */}
      {!loaded && (
        <LoadingScreen onComplete={handleLoadComplete} />
      )}

      {/* Main content */}
      {loaded && (
        <div style={{ color: "black", fontSize: "30px" }}>
          LuxWatch Working ✅
        </div>
      )}
    </>
  );
}