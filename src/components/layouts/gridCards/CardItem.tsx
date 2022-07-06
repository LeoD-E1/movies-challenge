import React from "react";
import "./styles/layouts.css";
import { CardItemProps } from "types";
import { Link } from "wouter";

const CardItem = (props: CardItemProps) => {
  const { obj } = props;
  const limit = 75;
  return (
    <div className="card_item">
      <Link href={`/movie/${obj.id}`}>
        <div className="inner-card">
          <div className="overlay"></div>
          <img src={obj.poster_path} alt={`${obj.title} movie`} />
          <div className="content">
            <p className="description">
              {obj.overview.slice(0, limit) + "..."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
