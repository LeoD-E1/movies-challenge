import DiscoverMovie, { FetchDataProps } from "types";

const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const fetchData = async (props: FetchDataProps) => {
  const { endpoint, query, popularity = "desc", rating } = props;
  const url = `${REACT_APP_BASE_URL}/${endpoint.value}?api_key=${REACT_APP_API_KEY}`;
  const average = rating
    ? `&vote_average.gte=${rating - 1}&vote_average.lte=${rating}`
    : "";
  const keyword = query ? `&query=${query}` : "";
  let response;

  try {
    switch (endpoint.type) {
      case "DISCOVER":
        response = await fetch(`${url}&sort_by=popularity.${popularity}`);
        break;

      case "DISCOVER-RATING":
        response = await fetch(
          `${url}&sort_by=popularity.${popularity}${average}`
        );
        break;

      case "SEARCH":
        response = await fetch(
          `${url}&sort_by=popularity.${popularity}${keyword}`
        );
        break;

      case `MOVIE`:
        response = await fetch(`${url}`);
        let dataJson = await response.json();
        return readImage(dataJson);

      default:
        break;
    }

    let data = await response?.json();
    data.results.map((movie: DiscoverMovie.Movie) => readImage(movie));

    return data;
  } catch (error) {
    console.log(error);
  }
};

const readImage = (movie: DiscoverMovie.Movie) => {
  movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  return movie;
};
