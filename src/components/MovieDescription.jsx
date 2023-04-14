const MovieDescription = ({ movieDetails }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movieDetails;

  const movieFullYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average).toFixed(1);

  return (
    <div>
      <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <div>
        <h3>
          {title} ({movieFullYear})
        </h3>
        <p>User Score: {userScore} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
