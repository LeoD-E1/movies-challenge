import React from "react";

const CardItem = (props: any) => {
  const { obj } = props;
  return (
    <div className="card_item style2">
      <a href={`/item-details-01`}>
        <div className="inner-card">
          <div className="overlay"></div>
          <img src="" alt="Axies" />
          <div className="content">
            <div className="fs-16">{obj.name}'s gallery</div>
            <p className="description">{obj.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
