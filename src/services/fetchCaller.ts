const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const fetchData = async (endpoint: any) => {
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL}/${endpoint}?api_key=${REACT_APP_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
