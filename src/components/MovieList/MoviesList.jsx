import noImage from '../../defaultImages/noImage.webp';
import { useLocation } from 'react-router-dom';
import {
  ItemLink,
  ItemList,
  Title,
  ImgWrapper,
  Poster,
  MovieItem,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const imageURL = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <ItemList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            {movie.title && (
              <ItemLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <ImgWrapper>
                  <Poster
                    src={
                      movie.poster_path
                        ? `${imageURL}${movie.poster_path}`
                        : noImage
                    }
                    alt={movie.title}
                  />
                </ImgWrapper>
                <Title>{movie.title}</Title>
              </ItemLink>
            )}
          </MovieItem>
        ))}
      </ItemList>
    </>
  );
};
