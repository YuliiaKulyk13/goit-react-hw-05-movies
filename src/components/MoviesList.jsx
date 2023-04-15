import { useLocation } from 'react-router-dom';
import { ItemLink, ItemList } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ItemList>
        {movies.map(movie => (
          <li key={movie.id}>
            <ItemLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <h3>{movie.title}</h3>
            </ItemLink>
          </li>
        ))}
      </ItemList>
    </>
  );
};
