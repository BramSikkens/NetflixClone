import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardRanked from "../MovieCardRanked/MovieCardRanked";
import "./MovieRow.css";
export default function MovieRow({ title, movieRequest, ranked }) {
  const [movies, setMovies] = useState({
    loading: true,
    items: [],
  });

  const [x, setX] = useState(0);
  let styles = {
    transform: `translate(${x}vw`,
  };

  useEffect(() => {
    fetch(movieRequest)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.results[0]);
        setMovies({
          loading: false,
          items: result.results.slice(0, 10),
        });
      });
  }, []);

  return (
    <div className="movieRow">
      <h2 className="rowTitle">{title || "No Title"}</h2>

      <div>
        {x < 0 && (
          <button
            className="translateButton"
            onClick={() => {
              setX(x + 18 * 5);
            }}
          >
            Go Left{" "}
          </button>
        )}

        <button
          className="translateButton right"
          onClick={() => {
            setX(x - 18 * 5);
          }}
        >
          Go Right
        </button>

        <div style={styles} className="movieCardList">
          {movies.loading ? (
            <p>Loading</p>
          ) : (
            movies.items.map((item, index) => {
              return ranked ? (
                <MovieCardRanked
                  number={index + 1}
                  imgUrl={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  movieId={item.id}
                />
              ) : (
                <MovieCard
                  imgUrl={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  movieId={item.id}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
