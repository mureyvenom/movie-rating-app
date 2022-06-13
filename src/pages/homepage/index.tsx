import { FormEvent, useRef } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import MovieCard from '../../components/MovieCard';
import Navbar from '../../components/Navbar';
import { searchAndFetch } from '../../redux/movies/movies.actions';
import {
  selectMovies,
  selectMoviesError,
  selectMoviesLoading,
} from '../../redux/movies/movies.selector';
import { clear, resetMovies } from '../../redux/movies/movies.slice';
import { AppDispatch } from '../../redux/store';

const Homepage = () => {
  const search = useRef<HTMLInputElement>(null);
  const allMovies = useSelector(selectMovies);
  const moviesError = useSelector(selectMoviesError);
  const moviesLoading = useSelector(selectMoviesLoading);

  const dispatch: any = useDispatch<AppDispatch>();

  const runSearch = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!search.current?.value) {
      dispatch(clear());
      dispatch(resetMovies());
      return;
    }
    dispatch(searchAndFetch(search.current.value));
  };

  return (
    <div className="bg-custom-dark h-screen">
      <div className="h-full overflow-y-auto bg-primary bg-opacity-10 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <div className="py-10 px-10">
            <form onSubmit={runSearch}>
              <div className="w-[60%] mx-auto">
                <input
                  type="search"
                  className="h-10 rounded bg-white shadow-md px-4 outline-none w-full"
                  placeholder="Search for movies..."
                  ref={search}
                />
              </div>
            </form>
          </div>
          <div className="flex-1 overflow-y-auto px-10 py-2">
            {moviesLoading ? (
              <div className="h-full flex justify-center items-center">
                <BiLoaderAlt className="text-white animate-spin" />
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-4">
                {allMovies.map((m) => (
                  <MovieCard key={m.imdbID} movie={m} />
                ))}
              </div>
            )}
            {moviesError && (
              <div className="h-full flex flex-col gap-y-2 justify-center items-center">
                <p>{moviesError}</p>
                <Button variant="primary" onClick={() => runSearch()}>
                  Try Again
                </Button>{' '}
              </div>
            )}
            {!allMovies.length && (
              <div className="h-full flex flex-col gap-y-2 justify-center items-center">
                <p className="font-bold text-2xl text-white">Enter a search term</p>
                <Button variant="primary" onClick={() => dispatch(searchAndFetch('fast'))}>
                  try this
                </Button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
