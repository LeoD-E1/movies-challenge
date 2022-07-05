import Home from "./Home";
import Discover from "./discover/Discover";
import MovieDetail from "./movieDetail/MovieDetail";

const routes = [
  { path: "/", component: Home },
  { path: "/discover", component: Discover },
  { path: "/movie/:id", component: MovieDetail },
];

export default routes;
