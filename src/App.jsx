import { useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      {!loaded && (
        <button onClick={() => setLoaded(true)}>
          Load App
        </button>
      )}

      {loaded && (
        <h1>LuxWatch Working ✅</h1>
      )}
    </div>
  );
}