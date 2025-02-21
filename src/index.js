import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./v3";
// import App from "./goelocation";
// import App from "../codingChalenge/currenciesConverter";

// import App from "./app-v2";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="purple" maxRating={10} onSetRating={setmovieRating} />
//       <p> this movie was rated {movieRating} star</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
{
  /* <StarRating
maxRating={5}
messages={["terrible", " bad", "okay", "good", "amazing"]}
/>
<StarRating
maxRating={10}
color="dodgerblue"
size={48}
className="test"
defaultRating={3}
/>
<Test />
<StarRating maxRating={10} />
<StarRating /> */
}
