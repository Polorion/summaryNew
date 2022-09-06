import Body from "./components/Body/Body";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Body />}>
          <Route path={"/port"} element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
