import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoreInfoOverlay from "./Components/MoreInfoOverlay/MoreInfoOverlay";
import Navbar from "./Components/Navbar/Navbar";
import Movies from "./Components/Pages/Movies/Movies";

import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state;
  return (
    <div className="App">
      {/* <MoreInfoOverlay /> */}
      <Navbar />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Movies />} />
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/test" element={<MoreInfoOverlay />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
