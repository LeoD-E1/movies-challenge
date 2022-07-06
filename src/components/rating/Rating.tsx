import "./styles/rating.css";
import { RatingProps } from "types";

const Rating = (props: RatingProps) => {
  const { rating, setRating } = props;

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index++;
          return (
            <h1
              key={index}
              className={`star-btn ${index <= rating ? "on" : "off"}`}
              onClick={() => {
                if (rating === index) {
                  setRating(0);
                  window.location.reload();
                } else {
                  setRating(index);
                }
              }}
            >
              <span className="star">&#9733;</span>
            </h1>
          );
        })}
      </div>
    </>
  );
};

export default Rating;
