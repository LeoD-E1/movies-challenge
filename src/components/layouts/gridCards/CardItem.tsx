import React from "react";
import "./styles/layouts.css";
import { CardItemProps } from "types";
import { Link } from "wouter";

const CardItem = (props: CardItemProps) => {
  const { obj } = props;
  return (
    <div className="card_item">
      <Link href={`/movie/${obj.id}`}>
        <div className="inner-card">
          <div className="overlay"></div>
          <img src={obj.poster_path} alt={`${obj.title} movie`} />
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
