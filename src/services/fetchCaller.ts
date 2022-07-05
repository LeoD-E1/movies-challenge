import { FetchDataProps } from "types";

const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const fetchData = async (props: FetchDataProps) => {
  const { endpoint, query, popularity = "desc", rating } = props;
  const keyword = query ? `&query=${query}` : "";
  const average = rating
    ? `&vote_average.gte=${rating - 1}&vote_average.lte=${rating}`
    : "";
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL}/${endpoint}?api_key=${REACT_APP_API_KEY}&sort_by=popularity.${popularity}${keyword}${average}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
