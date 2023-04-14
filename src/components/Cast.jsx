import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import { getCast } from './api/API';
import { Loader } from './Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    const renderCast = async () => {
      setLoading(true);
      try {
        const results = await getCast(movieId);
        if (results.length === 0) {
          return toast.warn('Sorry there are no cast by your request!');
        }
        setCast(results);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error('Oops,something went wrong.Please try again!');
      } finally {
        setLoading(false);
      }
    };
    renderCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message} </p>}
      {/* <CastCard cast={cast}/> */}
    </div>
  );
};
