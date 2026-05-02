      import { useState, useCallback } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <button onClick={handleLoadComplete}>
          Load App
        </button>
      )}

      {loaded && (
        <div style={{ color: "black", fontSize: "30px" }}>
          LuxWatch Working ✅
        </div>
      )}
    </>
  );
}