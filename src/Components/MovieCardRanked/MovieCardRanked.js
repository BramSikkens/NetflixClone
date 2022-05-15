import "./MovieCardRanked.css";

export default function MovieCardRanked({ number }) {
  return (
    <div className="movieCardRanked">
      <span className="movieNumber">{number}</span>
      <img className="movieCardRankedImage" src="thecrown.jpg"></img>
    </div>
  );
}
