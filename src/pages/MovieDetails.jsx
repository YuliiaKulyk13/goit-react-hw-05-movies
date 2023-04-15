import Notiflix from 'notiflix';
import { BackLink } from 'components/BackLink/BackLink';
import { getFullMovie } from 'components/api/API';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription/MovieDescription';

import { AdditionalList, ItemLink } from './MovieDetails.styled';

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
          Notiflix.Notify.warning(
            'Sorry, there are no matching results by your request!'
          );
          return;
        }
        setMovieDeatils(results);
        setError(null);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
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
