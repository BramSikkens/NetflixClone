import { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
  const [latestMovie, setLatestMovie] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/latest?api_key=" +
        process.env.REACT_APP_TMDBKEY +
        "&language=en-US"
    )
      .then((response) => response.json())
      .then((result) => {
        setLatestMovie(result);
        console.log(result);
      });
  }, []);
  return (
    <div className="banner">
      {latestMovie && (
        <img
          className="bannerImage"
          src={
            (latestMovie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + latestMovie.poster_path) ||
            "thecrown.jpg"
          }
        />
      )}
      {/* <div classname="bannerButtonRow">
        <button>Play</button>
        <button>More Info</button>
      </div> */}
    </div>
  );
}

export default Banner;
