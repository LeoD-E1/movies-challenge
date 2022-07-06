import React, { useState, useEffect } from "react";
import { MovieDetail as MovieDetailProps, MovieDetailParams } from "types";
import { fetchData } from "services/fetchCaller";
import "./styles/movieDetails.css";

const MovieDetail = (props: MovieDetailParams) => {
  const { params } = props;

  const [movie, setMovie] = useState<MovieDetailProps.Movie>();

  const RetrieveItem = async (id: string) => {
    const data: MovieDetailProps.Movie = await fetchData({
      endpoint: {
        type: "MOVIE",
        value: `movie/${id}`,
      },
    });
    setMovie(data);
  };

  useEffect(() => {
    RetrieveItem(params.id);
  }, [params.id]);

  return (
    <>
      <main className="container-movie-details">
        <div className="hero-overlay"></div>
        <div className="hero-container"></div>
        <section className="hero-section">
          <div className="cover-image">
            <img src={movie?.poster_path} alt={movie?.title} />
          </div>
          <div className="movie-detail">
            <h1 className="title">{movie?.title}</h1>
            <div className="btn-group">
              <button>reproducir</button>
              <div> Like </div>
              <div> compartir</div>
            </div>
            <div className="duration">
              {movie?.runtime} | {movie?.release_date} | {movie?.popularity}
            </div>
            <p className="description">{movie?.overview}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieDetail;
