import "./MoreLikeThisCard.css";

function MoreLikeThisCard({ title, description, imgUrl }) {
  return (
    <div className="MoreLikeThisCard">
      <img src={imgUrl} />
      <div className="MoreLikeThisCardDescription">
        <span className="MoreLikeThisCardTitle">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MoreLikeThisCard;
