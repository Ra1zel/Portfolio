import "./App.css";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
import Work from "./pages/Work";
function App() {
  const pages = [
    {
      path: "/",
      Component: <About />,
    },
    {
      path: "/Work",
      Component: <Work />,
    },
  ];
  return (
    <div>
      <Switch>
        {pages.map((page, index) => {
          return (
            <Route key={index} path={page.path} exact>
              {page.Component}
            </Route>
          );
        })}
        <Route path="*">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
