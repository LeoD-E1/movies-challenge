import "./styles/rating.css";

interface RatingProps {
  rating: number;
  setRating: (value: number) => void;
}

const Rating = (props: RatingProps) => {
  const { rating, setRating } = props;

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index++;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Rating;
