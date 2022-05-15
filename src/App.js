import "./App.css";
import Banner from "./Components/Banner/Banner";
import MovieRow from "./Components/MovieRow/MovieRow";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MovieRow title="best for you"  />
      <MovieRow />
    </div>
  );
}

export default App;
