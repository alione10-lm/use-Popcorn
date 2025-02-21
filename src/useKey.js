import { useEffect } from "react";
export function useKey(key, Close) {
  useEffect(
    function () {
      function callback(event) {
        if (event.code.toLowerCase() === key.toLowerCase()) Close();
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [Close, key]
  );
}
