import { useEffect } from "react";

export default function App() {
  useEffect(function () {
    async function weather() {
      try {
        const res = await fetch(" https://api.unsplash.com/");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    weather();
  }, []);
  return (
    <div>
      <p>Weather API 🌦️</p>
    </div>
  );
}

// fetch("https://Weather-API.proxy-production.allthingsdev.co/weather/citySearch?search_term=London", requestOptions)
//    .then((response) => response.text())
//    .then((result) => console.log(result))
//    .catch((error) => console.error(error));
