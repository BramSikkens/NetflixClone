import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoreInfoOverlay from "./Components/MoreInfoOverlay/MoreInfoOverlay";
import Navbar from "./Components/Navbar/Navbar";
import Movies from "./Components/Pages/Movies/Movies";
import { useSelector, useDispatch } from "react-redux";
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import { ProtectedRoute } from "./Components/Router/ProtectedRoute";
function App() {
  let location = useLocation();
  const user = useSelector((state) => state.authentication.user);

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state;
  return (
    <div className="App">
      {/* <MoreInfoOverlay /> */}
      <Navbar />
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Movies />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/test/:id" element={<MoreInfoOverlay />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
