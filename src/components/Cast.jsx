import { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { getCast } from './api/API';
import { Loader } from './Loader';
import CardCast from './CardCast';
import { CastList } from './Cast.styled';

const Cast = () => {
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
          return alert('Sorry there are no cast by your request!');
        }
        setCast(results);
        setError(null);
      } catch (error) {
        setError(error);
        alert('Oops,something went wrong.Please try again!');
      } finally {
        setLoading(false);
      }
    };
    renderCast();
  }, [movieId]);

  return (
    <CastList>
      {loading && <Loader />}
      {error && <p>{error.message} </p>}
      <CardCast cast={cast} />
    </CastList>
  );
};
export default Cast;
