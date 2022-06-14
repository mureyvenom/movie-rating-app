import { useNavigate } from 'react-router-dom';
import { MovieType } from '../utils/types';

interface Props {
  movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/movie-details/${movie.imdbID}`)}>
      <div className="p-2 rounded-md bg-black">
        <div
          className="relative group bg-contain bg-center bg-no-repeat h-96"
          style={{
            backgroundImage: `url(${movie.Poster})`,
          }}
        >
          <div className="absolute transform origin-center scale-0 transition-all duration-300 top-0 left-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white gap-y-2 backdrop-blur-md text-sm group-hover:scale-100">
            <h3 className="font-bold">{movie.Title}</h3>
            <div>Year: {movie.Year}</div>
            <div>Type: {movie.Type}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MovieCard;
