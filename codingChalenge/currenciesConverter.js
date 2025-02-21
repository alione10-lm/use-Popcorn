import { useEffect, useState } from "react";

export default function App() {
  const [amount, setamount] = useState();
  const [From, setFrom] = useState("USD");
  const [To, setTo] = useState("EUR");
  const [Result, setResult] = useState();

  useEffect(
    function () {
      async function FetchCurr() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${From}&to=${To}`
          );
          const data = await res.json();
          setResult(data.rates[To]);
        } catch (err) {
          console.error(err);
        }
      }
      if (To === From) setResult(amount);
      FetchCurr();
    },

    [From, To, amount]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setamount(Number(e.target.value))}
      />
      <select value={From} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select value={To} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p style={{ color: "red", fontSize: "40px" }}>{Result}</p>
    </div>
  );
}
