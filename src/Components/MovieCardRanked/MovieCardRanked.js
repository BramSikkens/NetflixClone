import "./MovieCardRanked.css";

export default function MovieCardRanked({ number, imgUrl }) {
  return (
    <div className="movieCardRanked">
      <span className="movieNumber">{number}</span>
      <img className="movieCardRankedImage" src={imgUrl}></img>
    </div>
  );
}
