import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from './api/API';

import { Loader } from './Loader';
import ReviewsCard from './ReviewsCard';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const renderReviews = async () => {
      setLoading(true);
      try {
        const results = await getReviews(movieId);
        if (results.length === 0) {
          toast.warn('Sorry there are no reviews by your request!');
          return;
        }
        setReviews(results);
      } catch (error) {
        setError(error);
        toast.error('Oops,something went wrong.Please try again!');
      } finally {
        setLoading(false);
      }
    };
    renderReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message} </p>}
      <ReviewsCard reviews={reviews} />
    </div>
  );
};
