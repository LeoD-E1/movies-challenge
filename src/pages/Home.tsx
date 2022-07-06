import React from "react";
import Header from "components/header/Header";
import GridCards from "components/layouts/gridCards/GridCards";

const Home = () => {
  return (
    <div>
      <Header />
      <GridCards title="Discover" movies={[]} />
    </div>
  );
};

export default Home;
