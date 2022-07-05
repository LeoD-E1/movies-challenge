import { useState, useEffect, useReducer } from "react";
import Header from "components/header/Header";
import GridCards from "components/layouts/gridCards/GridCards";
import { fetchData } from "services/fetchCaller";
import DiscoverMovie from "types/index";
import SearchBar from "components/searchBar/SearchBar";
import Rating from "components/rating/Rating";

import { discoverReducer, initialState } from "./reducer/discoverReducer";

const Discover = () => {
  const [discoverState, dispatch] = useReducer(discoverReducer, initialState);

  const [rating, setRating] = useState(0);
  const [isLoadig, setLoadig] = useState(false);
  const [isError, setError] = useState(false);

  const discoverMovies = async (num?: number) => {
    setLoadig(true);
    let data: DiscoverMovie.Response;
    try {
      if (rating === 0) {
        data = await fetchData({
          endpoint: "discover/movie",
        });
      } else {
        data = await fetchData({ endpoint: "discover/movie", rating: num });
      }
      dispatch({ type: "SET_MOVIES", payload: { movies: data.results } });
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoadig(false);
  };

  const handleSubmit = async (key: string) => {
    dispatch({ type: "UPDATE_KEYWORD", payload: { keyword: key } });
    if (key.length) {
      try {
        const data: DiscoverMovie.Response = await fetchData({
          endpoint: "search/movie",
          query: key,
        });
        dispatch({
          type: "SET_SEARCHED_MOVIES",
          payload: { movies: data.results },
        });
      } catch (error) {
        setError(true);
        console.error(error);
      }
    }
  };

  useEffect(() => {
    discoverMovies();
  }, []);

  useEffect(() => {
    if (rating !== 0) {
      discoverMovies(rating * 2);
    }
  }, [rating]);

  return (
    <>
      <Header />
      {isLoadig ? (
        <div> Loading... </div>
      ) : isError ? (
        <div>An Error has ocurred </div>
      ) : (
        <main className="container-app">
          <SearchBar handleChangeKey={handleSubmit} />
          <Rating rating={rating} setRating={setRating} />
          {!discoverState.keyword.length ? (
            <GridCards movies={discoverState.movies} title="Discover" />
          ) : (
            <GridCards
              movies={discoverState.moviesSearched}
              title={`Results of ${discoverState.keyword}`}
            />
          )}
        </main>
      )}
    </>
  );
};

export default Discover;
