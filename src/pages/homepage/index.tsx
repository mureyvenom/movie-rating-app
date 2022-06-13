import { FormEvent, useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import MovieCard from '../../components/MovieCard';
import Navbar from '../../components/Navbar';
import { searchAndFetch } from '../../redux/movies/movies.actions';
import { set } from '../../redux/movies/movies.slice';
import { AppDispatch } from '../../redux/store';
import apiConnect from '../../utils/apiConnect';
import { MovieType } from '../../utils/types';

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [movies, setMovies] = useState<MovieType[]>([]);
  const search = useRef<HTMLInputElement>(null);

  const dispatch: any = useDispatch<AppDispatch>();

  const runSearch = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    try {
      setLoading(true);
      setSearchError('');
      setMovies([]);
      if (!search.current?.value) {
        setLoading(false);
        return;
      }
      const response = await apiConnect.get('', {
        params: {
          s: search.current?.value,
        },
      });
      if (!response.data?.Error) {
        setLoading(false);
        setMovies(response.data.Search);
        dispatch(set(response.data.Search));
      } else {
        setSearchError(response.data.Error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchError('Something went wrong');
    }
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
            {loading ? (
              <div className="h-full flex justify-center items-center">
                <BiLoaderAlt className="text-white animate-spin" />
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-4">
                {movies.map((m) => (
                  <MovieCard key={m.imdbID} movie={m} />
                ))}
              </div>
            )}
            {searchError && (
              <div className="h-full flex flex-col gap-y-2 justify-center items-center">
                <p>{searchError}</p>
                <Button variant="primary" onClick={() => runSearch()}>
                  Try Again
                </Button>{' '}
              </div>
            )}
            {!movies.length && (
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
