import { useNavigate } from "react-router-dom";
import "./MoreInfoOverlay.css";

function MoreInfoOverlay() {
  let navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <div className="MoreInfoOverlay">
      <div className="MoreInfoContainer">
        <img src="thecrown.jpg" />
        <div className="MoreInfoContent">
          <div>
            <button onClick={onDismiss}>Close</button>
            <h2>Title</h2>
            <p>Description</p>
          </div>
          <div>more info</div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoOverlay;
