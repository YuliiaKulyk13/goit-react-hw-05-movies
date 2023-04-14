import toast from 'react-hot-toast';
import { BackLink } from 'components/BackLink';
import { getFullMovie } from 'components/api/API';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription';

const MovieDetails = () => {
  const [movieDetails, setMovieDeatils] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const renderMovieDetails = async () => {
      try {
        const results = await getFullMovie(movieId);
        if (!results) {
          return toast.error(
            'Sorry, there are no matching results by your request!'
          );
        }
        setMovieDeatils(results);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error(
          'Sorry there are no movies matching your request.Please try again!'
        );
      }
    };
    renderMovieDetails();
  }, [movieId]);

  return (
    <div>
      <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        {movieDetails && <MovieDescription movieDetails={movieDetails} />}
      </main>
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default MovieDetails;
