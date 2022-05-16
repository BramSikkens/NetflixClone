import "./MovieCard.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieCard({ imgUrl, movieId }) {
  let location = useLocation();
  return (
    <div className="movieCard">
      <img className="movieCardImage" src={imgUrl}></img>

      <div className="movieCardInfo">
        <div>
          <span className="matchingPercentage">93% match</span>
          <span>1 season</span>
        </div>
        <div>goofy funny</div>
        <Link
          key={movieId}
          to={"/test/" + movieId}
          state={{ backgroundLocation: location }}
        >
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
}
