import "./App.css";
import About from "./pages/About";
import { Route } from "react-router-dom";
import Work from "./pages/Work";
function App() {
  const pages = [
    {
      path: "/About",
      Component: <About />,
    },
    { path: "/", Component: <About /> },
    {
      path: "/Work",
      Component: <Work />,
    },
  ];
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Route key={index} path={page.path}>
            {page.Component}
          </Route>
        );
      })}
    </div>
  );
}

export default App;
