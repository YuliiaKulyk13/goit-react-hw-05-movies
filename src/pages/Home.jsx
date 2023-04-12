import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/api/API';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const createTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrending(results);
      } catch (error) {
        console.log(error);
      }
    };

    createTrendingMovies();
  });

  return (
    <main>
      <h2>Trending today</h2>
      {trending.length > 0 && (
        <MoviesList movies={trending} location={location} />
      )}
    </main>
  );
};
export default Home;
