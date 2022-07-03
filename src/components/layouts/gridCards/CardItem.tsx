import React from "react";
import "./styles/layouts.css";
import DiscoverMovie from "types/index";
import { Link } from "wouter";

interface CardItemProps {
  obj: DiscoverMovie.Movie;
}

const CardItem = (props: CardItemProps) => {
  const { obj } = props;
  return (
    <div className="card_item">
      <Link href={`/item-details-01`}>
        <div className="inner-card">
          <div className="overlay"></div>
          <img
            src="https://media.istockphoto.com/vectors/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-vector-id1142986365"
            alt="Axies"
          />
          <div className="content">
            <div className="fs-16">{obj.title}</div>
            <p className="description">{obj.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
