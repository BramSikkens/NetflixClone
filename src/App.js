import "./App.css";
import Banner from "./Components/Banner/Banner";
import MovieRow from "./Components/MovieRow/MovieRow";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MovieRow
        title="Popular"
        movieRequest="https://api.themoviedb.org/3/movie/popular?api_key=4582beef3f9c4c12cf6a2cc07d83ce49&language=en-US&page=2"
        ranked
      />
      <MovieRow
        title="Trending This Week"
        movieRequest="https://api.themoviedb.org/3/trending/all/week?api_key=4582beef3f9c4c12cf6a2cc07d83ce49"
      />
      <MovieRow
        title="Top Rated"
        movieRequest="https://api.themoviedb.org/3/movie/top_rated?api_key=4582beef3f9c4c12cf6a2cc07d83ce49&language=en-US&page=1"
      />
    </div>
  );
}

export default App;
