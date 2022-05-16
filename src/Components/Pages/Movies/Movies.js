import {
  Link,
  useLocation
} from "react-router-dom";
import Banner from "../../Banner/Banner";
import MovieRow from "../../MovieRow/MovieRow";


function Movies() {
  let location = useLocation();

  return (
    <>
      <Banner />
      <Link
        key={"tedt"}
        to={`/test`}
        // This is the trick! Set the `backgroundLocation` in location state
        // so that when we open the modal we still see the current page in
        // the background.
        state={{ backgroundLocation: location }}
      >
        <button>Test</button>
      </Link>
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
    </>
  );
}

export default Movies;
