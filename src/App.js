import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlayerStats from "./pages/PlayerStats/PlayerStats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerStats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
