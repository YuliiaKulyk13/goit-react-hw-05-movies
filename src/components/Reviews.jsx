import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);
  return <div>Reviews: {movieId}</div>;
};
