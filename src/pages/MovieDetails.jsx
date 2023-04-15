// import { toast } from 'react-toastify';
import { BackLink } from 'components/BackLink';
import { getFullMovie } from 'components/api/API';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription';
import { AdditionalList } from './MovieDetails.styled';
import { ItemLink } from 'components/MoviesList.styled';

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
          return alert('Sorry, there are no matching results by your request!');
        }
        setMovieDeatils(results);
        setError(null);
      } catch (error) {
        setError(error);
        alert(
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
        <AdditionalList>
          <li>
            <ItemLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </ItemLink>
          </li>
          <li>
            <ItemLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </ItemLink>
          </li>
        </AdditionalList>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default MovieDetails;
