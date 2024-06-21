import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home";
import Apps from "./components/Apps";
import Crud from "./components/Crud";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Apps" element={<Apps />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
