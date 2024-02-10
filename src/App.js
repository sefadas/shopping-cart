import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Containers from "./containers/Containers";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {

  const { drawer } = useSelector(state => state.drawers)

  console.log(drawer, "draw")

  return (
    <div className="App">
      <Navbar />
      <Containers>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Card />}
        </BrowserRouter>
      </Containers>
    </div>
  );
}

export default App;
