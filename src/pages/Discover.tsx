import { useState, useEffect, useReducer, useCallback } from "react";
import Header from "components/header/Header";
import GridCards from "components/layouts/gridCards/GridCards";
import { fetchData } from "services/fetchCaller";
import DiscoverMovie from "types/index";
import SearchBar from "components/searchBar/SearchBar";
import Rating from "components/rating/Rating";

const SET_MOVIES = "SET_MOVIES";
const UPDATE_RATING = "UPDATE_RATING";
const SET_SEARCHED_MOVIES = "SET_SEARCHED_MOVIES";
const UPDATE_KEYWORD = "UPDATE_KEYWORD";
const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";

interface DiscoverType {
  movies: DiscoverMovie.Movie[];
  moviesSearched: DiscoverMovie.Movie[];
  rating: number;
  keyword: string;
  isLoading: boolean;
  isError: boolean;
}

type ActionDiscoverType =
  | { type: "SET_MOVIES"; payload: { movies: DiscoverMovie.Movie[] } }
  | { type: "SET_SEARCHED_MOVIES"; payload: { movies: DiscoverMovie.Movie[] } }
  | { type: "UPDATE_RATING"; payload: { rating: number } }
  | { type: "UPDATE_KEYWORD"; payload: { keyword: string } }
  | { type: "IS_LOADING"; payload: { loading: boolean } }
  | { type: "IS_ERROR"; payload: { error: boolean } };

const initialState: DiscoverType = {
  movies: [],
  moviesSearched: [],
  rating: 0,
  keyword: "",
  isLoading: false,
  isError: false,
};

const discoverReducer = (
  state: typeof initialState,
  action: ActionDiscoverType
): DiscoverType => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
      };

    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        moviesSearched: action.payload.movies,
      };

    case UPDATE_RATING:
      return {
        ...state,
        rating: action.payload.rating,
      };
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    case IS_ERROR:
      return {
        ...state,
        isError: action.payload.error,
      };

    default:
      return state;
  }
};

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
    discoverMovies(rating * 2);
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
