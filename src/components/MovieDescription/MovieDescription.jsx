import noImage from '../../defaultImages/noImage.webp';
import {
  Genres,
  MovieDescriptionContainer,
  Overview,
  TextContainer,
  Title,
} from './MovieDescription.styled';

const MovieDescription = ({ movieDetails }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movieDetails;

  const movieFullYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average).toFixed(1);
  const imageURL = 'https://image.tmdb.org/t/p/w300';
  return (
    <MovieDescriptionContainer>
      <img
        src={poster_path ? `${imageURL}${poster_path}` : noImage}
        alt={title}
      />
      <TextContainer>
        <Title>
          {title} ({movieFullYear})
        </Title>
        <p>User Score: {userScore}%</p>
        <Overview>Overview</Overview>
        <p>{overview}</p>
        <Genres>Genres</Genres>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </TextContainer>
    </MovieDescriptionContainer>
  );
};

export default MovieDescription;
