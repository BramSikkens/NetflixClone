import MovieCard from "../MovieCard/MovieCard";
import MovieCardRanked from "../MovieCardRanked/MovieCardRanked";
import "./MovieRow.css";
export default function MovieRow({ title, movieRequest, ranked }) {
  return (
    <div className="movieRow">
      <h2 className="rowTitle">{title || "No Title"}</h2>

      <div>
        <div className="movieCardList">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
