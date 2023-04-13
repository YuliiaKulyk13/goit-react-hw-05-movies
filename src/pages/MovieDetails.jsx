import { BackLink } from 'components/BackLink';
import { getFullMovie } from 'components/api/API';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getFullMovie(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <h2>{/* Movie - {movie.original_title} - {movieId} */}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
