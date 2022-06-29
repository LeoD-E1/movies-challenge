import CardItem from "./CardItem";

const GridCards = (props: any) => {
  const { movies, title } = props;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="container-cards">
        {movies.map((movie: any, index: number) => (
          <CardItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GridCards;
