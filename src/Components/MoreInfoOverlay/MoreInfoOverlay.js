import { useNavigate, useParams } from "react-router-dom";
import "./MoreInfoOverlay.css";
import MoreLikeThisCard from "../MoreLikeThisCard/MoreLikeThisCard";

import { useEffect, useState } from "react";

function MoreInfoOverlay(props) {
  let navigate = useNavigate();
  let params = useParams();
  let [movieDetail, setMovieDetail] = useState({});
  let [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    let movieId = params.id;
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=" +
        process.env.REACT_APP_TMDBKEY +
        "&language=en-US&append_to_response=videos"
    )
      .then((res) => res.json())
      .then((result) => {
        setMovieDetail(result);
        console.log(result);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/similar?api_key=" +
        process.env.REACT_APP_TMDBKEY +
        "&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((result) => setSimilarMovies(result.results.splice(0, 6)));
  }, []);

  function onDismiss() {
    navigate(-1);
  }

  return (
    <div className="MoreInfoOverlay">
      <div className="MoreInfoContainer">
        {movieDetail?.videos?.results[0] && (
          <iframe
            allow="autoplay; encrypted-media"
            src={
              "https://www.youtube.com/embed/" +
              movieDetail?.videos?.results[0].key +
              "?autoplay=1&controls=0&rel=0"
            }
          ></iframe>
        )}
        <div className="MoreInfoContent">
          <div>
            <button onClick={onDismiss}>Close</button>
            <h2>{movieDetail.title || "No Title"}</h2>
            <p>{movieDetail.overview || "No Description"}</p>
          </div>
          <div>
            <b>Release Date: {movieDetail.release_date}</b>
          </div>

          <div>
            <h2>More Like This</h2>
            <div className="MoreLikeThisCardContainer">
              {similarMovies &&
                similarMovies.map((movie) => {
                  return (
                    <MoreLikeThisCard
                      title={movie.original_title}
                      description={movie.overview}
                      imgUrl={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoOverlay;
