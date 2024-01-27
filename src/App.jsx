import { useEffect, useState } from "react";
import "./App.css";
import { fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/moviedb";
import MovieList from "./components/movieList/MovieList";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";

function App() {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getTrendingMovies();
    getUpcomimgMovies();
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
  };

  const getUpcomimgMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };

  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    if (data && data.results) setPopular(data.results);
  };

  return (
    <>
      <Header />
      <Banner/>
      <MovieList title="Popular on Netflix" data={popular} />
      <MovieList title="Trending Movies" data={trending} />
      <MovieList title="Top Rated on IMDB" data={topRated} />
      <MovieList title="Upcoming Movies" data={upcoming} />
    </>
  );
}

export default App;
