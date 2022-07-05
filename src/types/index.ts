export interface Link {
  id: number;
  name: String;
  link: String;
  subLinks?: Link[];
}

export interface FetchDataProps {
  endpoint: string;
  query?: string;
  popularity?: "desc" | "asc";
  rating?: number;
}

export type ActionDiscoverType =
  | { type: "SET_MOVIES"; payload: { movies: DiscoverMovie.Movie[] } }
  | { type: "SET_SEARCHED_MOVIES"; payload: { movies: DiscoverMovie.Movie[] } }
  | { type: "UPDATE_RATING"; payload: { rating: number } }
  | { type: "UPDATE_KEYWORD"; payload: { keyword: string } }
  | { type: "IS_LOADING"; payload: { loading: boolean } }
  | { type: "IS_ERROR"; payload: { error: boolean } };

declare module DiscoverMovie {
  interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  interface Response {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
}

export interface DiscoverType {
  movies: DiscoverMovie.Movie[];
  moviesSearched: DiscoverMovie.Movie[];
  rating: number;
  keyword: string;
  isLoading: boolean;
  isError: boolean;
}

export interface RatingProps {
  rating: number;
  setRating: (value: number) => void;
}

export interface CardItemProps {
  obj: DiscoverMovie.Movie;
}

export interface SearchProps {
  handleChangeKey: (value: string) => void;
}

export declare module MovieDetail {
  export interface Genre {
    id: number;
    name: string;
  }

  export interface ProductionCompany {
    id: number;
    logo_path?: any;
    name: string;
    origin_country: string;
  }

  export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }

  export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

  export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}

export interface MovieDetailParams {
  params: {
    id: string;
  };
}

export default DiscoverMovie;
