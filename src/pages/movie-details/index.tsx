import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import apiConnect from '../../utils/apiConnect';
import { MovieDetailsType } from '../../utils/types';
import Button from '../../components/Button';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<MovieDetailsType>();
  const [error, setError] = useState('');
  const params = useParams();

  const getMovieDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await apiConnect.get('', {
        params: {
          i: params.id,
        },
      });

      if (!response.data?.Error) {
        setLoading(false);
        setMovie(response.data);
      } else {
        setLoading(false);
        setError(response.data.Error);
      }
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      setLoading(false);
      setError((err.response?.data as any).Error || 'Something went wrong');
    }
  }, [params]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <BiLoaderAlt className="text-white" />
      </div>
    );
  }

  if (error) {
    <div className="h-full flex flex-col gap-y-2 justify-center items-center">
      <p>{error}</p>
      <Button variant="primary" onClick={() => getMovieDetails()}>
        Try Again
      </Button>{' '}
    </div>;
  }

  return (
    <Layout>
      <div className="flex-1 flex flex-col">
        <div className="p-10 flex flex-1 justify-between items-center">
          <div className="text-white flex-[3] md:pr-40">
            <h1 className="text-3xl font-medium">{movie?.Title}</h1>
            <div className="text-primary flex gap-x-5 items-center py-2">
              <p className="flex items-center">
                IMDB Rating <AiFillStar className="text-[gold]" />: {movie?.imdbRating}
              </p>
              <p>IMDB Votes: {movie?.imdbRating}</p>
            </div>
            <div className="py-2">{movie?.Plot}</div>
            <p className="my-1">
              Director: <span className="text-primary">{movie?.Director}</span>
            </p>
            <p className="my-1">
              Actors: <span className="text-primary">{movie?.Actors}</span>
            </p>
            <p className="my-1">
              Genre: <span className="text-primary">{movie?.Genre}</span>
            </p>
            <p className="my-1">
              Year: <span className="text-primary">{movie?.Year}</span>
            </p>
            <p className="my-1">
              Language: <span className="text-primary">{movie?.Language}</span>
            </p>
          </div>
          <div className="flex-[1]">
            <img src={movie?.Poster} alt="Movie" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
