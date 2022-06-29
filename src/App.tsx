import "./App.css";
import routes from "./pages";
import { Switch, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
