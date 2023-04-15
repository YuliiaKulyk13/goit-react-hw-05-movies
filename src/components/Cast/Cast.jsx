import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/api/API';

import { CastList } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import CardCast from 'components/CardCast/CardCast';

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
          Notiflix.Notify.info('Sorry there are no cast by your request!');
          return;
        }
        setCast(results);
        setError(null);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure('Oops,something went wrong.Please try again!');
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
