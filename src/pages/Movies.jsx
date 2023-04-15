import { ToastContainer, toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { SearchBox } from 'components/SearchBox';
import { searchMovies } from 'components/api/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// import { BackLink } from 'components/BackLink';

const Movies = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieName = searchParams.get('query') ?? '';

  const nextParams = request !== '' ? { query: request } : {};
  const handleNameChange = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (request.trim() === '') {
      return toast.warn('Please enter a request!');
    }

    setMovies([]);
    setRequest('');
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') return;

    const renderMovies = async () => {
      setLoading(true);

      try {
        const results = await searchMovies(movieName);
        if (results.length === 0) {
          return toast.error('Something went wrong.Please try again!');
        }
        setMovies(results);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error(
          'Sorry there are no movies matching your request.Please try again!'
        );
      } finally {
        setLoading(false);
      }
    };
    renderMovies();
  }, [movieName]);

  return (
    <main>
      <SearchBox
        onSubmit={handleSubmit}
        value={request}
        onChange={handleNameChange}
      />

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
      {error && <p>{error.message}</p>}
      {loading && <Loader />}
      <ToastContainer autoClose={4000} position={'top-right'} />
    </main>
  );
};

export default Movies;
