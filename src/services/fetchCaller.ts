import DiscoverMovie, { FetchDataProps } from "types";

const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const fetchData = async (props: FetchDataProps): Promise<any> => {
  const { endpoint, query, popularity = "desc", rating } = props;
  const keyword = query ? `&query=${query}` : "";
  const average = rating
    ? `&vote_average.gte=${rating - 1}&vote_average.lte=${rating}`
    : "";
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL}/${endpoint}?api_key=${REACT_APP_API_KEY}&sort_by=popularity.${popularity}${keyword}${average}`
    );
    let data: DiscoverMovie.Response = await response.json();
    data.results.map((movie: DiscoverMovie.Movie) => {
      return (movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
