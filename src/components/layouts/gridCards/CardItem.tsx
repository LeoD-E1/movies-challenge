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
            src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg"
            alt={`${obj.title} movie`}
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
