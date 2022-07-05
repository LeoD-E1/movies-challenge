import React, { useState, useEffect } from "react";
import { MovieDetail as MovieDetailProps, MovieDetailParams } from "types";
import { fetchData } from "services/fetchCaller";

const MovieDetail = (props: MovieDetailParams) => {
  const { params } = props;

  const [movie, setMovie] = useState<MovieDetailProps.Movie>();

  // const RetrieveItem = async (id: string) => {
  //   const data: MovieDetailProps.Movie = await fetchData({
  //     endpoint: `movie/${id}`,
  //   });
  //   setMovie(data);
  // };

  useEffect(() => {
    // RetrieveItem(params.id);
  }, [params.id]);

  return (
    <>
      <div>{movie?.imdb_id}</div>
    </>
  );
};

export default MovieDetail;
