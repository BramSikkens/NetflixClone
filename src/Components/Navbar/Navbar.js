import "./Navbar.css";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;
