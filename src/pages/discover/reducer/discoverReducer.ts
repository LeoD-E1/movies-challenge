import { DiscoverType, ActionDiscoverType } from "types/index";

const SET_MOVIES = "SET_MOVIES";
const SET_SEARCHED_MOVIES = "SET_SEARCHED_MOVIES";
const UPDATE_KEYWORD = "UPDATE_KEYWORD";

export const initialState: DiscoverType = {
  movies: [],
  moviesSearched: [],
  rating: 0,
  keyword: "",
  isLoading: false,
  isError: false,
};

export const discoverReducer = (
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

    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
      };

    default:
      return state;
  }
};
