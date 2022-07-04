import { useState, useEffect } from "react";
import Header from "components/header/Header";
import GridCards from "components/layouts/gridCards/GridCards";
import { fetchData } from "services/fetchCaller";
import DiscoverMovie from "types/index";
import SearchBar from "components/searchBar/SearchBar";

const Discover = () => {
  const [movies, setMovies] = useState<DiscoverMovie.Movie[]>([]);
  const [movieSearched, setMovieSearched] = useState<DiscoverMovie.Movie[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [isLoadig, setLoadig] = useState(false);
  const [isError, setError] = useState(false);

  const discoverMovies = async () => {
    setLoadig(true);
    try {
      const data: DiscoverMovie.Response = await fetchData({
        endpoint: "discover/movie",
      });
      setMovies(data.results);
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoadig(false);
  };

  const handleSubmit = async (keyword: string) => {
    setKeyword(keyword);
    if (keyword.length) {
      try {
        const data: DiscoverMovie.Response = await fetchData({
          endpoint: "search/movie",
          query: keyword,
        });
        setMovieSearched(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    }
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
    <>
      <Header />
      <SearchBar handleChangeKey={handleSubmit} />
      {!keyword.length ? (
        <GridCards movies={movies} title="Discover" />
      ) : (
        <GridCards movies={movieSearched} title={`Search ${keyword}`} />
      )}
    </>
  );
};

export default Discover;
