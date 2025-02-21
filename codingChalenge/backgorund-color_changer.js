import { useState } from "react";

export default function App() {
  const [color, setcolor] = useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: "250px",
          height: "300px",
          border: "1px solid #f7f7f7",
        }}
      ></div>
      <input
        type="text"
        placeholder="Chose a color"
        style={{ textAlign: "center", padding: "10px 30px", border: "none" }}
        onChange={(e) => setcolor(e.target.value)}
      />
    </div>
  );
}
