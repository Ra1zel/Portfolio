import "./App.css";
import About from "./pages/About";

import { Route } from "react-router-dom";
function App() {
  return (
    <Route path="/">
      <About />
    </Route>
  );
}

export default App;
