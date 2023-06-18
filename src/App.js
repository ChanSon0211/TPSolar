import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Users/Login";
import IntroducePage from "./components/IntroducePage/IntroducePage";
import Project from "./components/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
