import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);
  return <div>Cast: {movieId}</div>;
};
