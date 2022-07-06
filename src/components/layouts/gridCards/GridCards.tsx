import CardItem from "./CardItem";
import "./styles/layouts.css";
import DiscoverMovie from "types/index";

interface GridCardsProps {
  movies: DiscoverMovie.Movie[];
  title: string;
}

const GridCards = (props: GridCardsProps) => {
  const { movies, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      {movies.length ? (
        <div className="container-cards">
          {movies.map((movie: DiscoverMovie.Movie, index: number) => (
            <CardItem key={index} obj={movie} />
          ))}
        </div>
      ) : (
        <p> There are no movies to show! </p>
      )}
    </div>
  );
};

export default GridCards;
