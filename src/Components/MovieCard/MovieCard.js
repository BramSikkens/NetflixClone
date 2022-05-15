import "./MovieCard.css";

export default function MovieCard() {
  return (
    <div className="movieCard">
      <img className="movieCardImage" src="thecrown.jpg"></img>
      <div className="movieCardInfo">
        <div>
          <span className="matchingPercentage">93% match</span>
          <span>1 season</span>
        </div>
        <div>goofy funny</div>
      </div>
    </div>
  );
}
