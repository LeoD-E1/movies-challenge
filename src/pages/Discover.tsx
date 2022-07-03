import { useState, useEffect } from "react";
import Header from "components/header/Header";
import GridCards from "components/layouts/gridCards/GridCards";
import { fetchData } from "services/fetchCaller";
import DiscoverMovie from "types/index";
import path from "path";

const Discover = () => {
  const [movies, setMovies] = useState<DiscoverMovie.Movie[]>([]);
  const [isLoadig, setLoadig] = useState(false);
  const [isError, setError] = useState(false);

  const discoverMovies = async () => {
    setLoadig(true);
    try {
      const data: DiscoverMovie.Response = await fetchData("discover/movie");
      setMovies(data.results);
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoadig(false);
  };

  useEffect(() => {
    discoverMovies();
  }, []);

  if (isLoadig) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error has ocurred </p>;
  }

  return (
    <div>
      <Header />
      <GridCards movies={movies} title="Discover" />
    </div>
  );
};

export default Discover;
