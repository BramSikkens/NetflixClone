import "./MovieCard.css";

export default function MovieCard({ imgUrl }) {
  return (
    <div className="movieCard">
      <img className="movieCardImage" src={imgUrl}></img>
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
