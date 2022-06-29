import CardItem from "./CardItem";

const GridCards = (props: any) => {
  const { movies } = props;

  return (
    <div className="row">
      <h2 className="mb-5">Featured Places</h2>
      <div className="container-cards">
        {movies.map((movie: any, index: number) => {
          <CardItem key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default GridCards;
