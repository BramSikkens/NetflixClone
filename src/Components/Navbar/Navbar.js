import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOutRx } from "../../redux/Slices/AuthenticationSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="netflix.png" />
      </div>
      <ul className="navList">
        <li className="navItem">Home</li>
        <li className="navItem">Tv Shows</li>
        <li className="navItem">New & Popular</li>
        <li className="navItem">My List</li>
      </ul>
      {user && (
        <button
          onClick={() => {
            dispatch(signOutRx());
          }}
        >
          Sign out
        </button>
      )}
    </nav>
  );
}

export default Navbar;
