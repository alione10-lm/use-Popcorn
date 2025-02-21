import { useState, useEffect } from "react";
const KEY = "45ecbded";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");
  useEffect(
    function () {
      callback?.();
      const controlller = new AbortController();
      async function Ftechmovies() {
        try {
          setIsLoading(true);
          seterror("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controlller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          seterror("");
        } catch (err) {
          if (err.name !== "AbortError") seterror(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        seterror("");
        return;
      }

      Ftechmovies();

      return function () {
        controlller.abort();
      };
    },
    [query]
  );
  return { movies, IsLoading, error };
}
