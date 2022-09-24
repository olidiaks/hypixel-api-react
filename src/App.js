import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlayerStats from "./pages/PlayerStats/PlayerStats";
import {useState} from "react";
import {UuidContext} from "./Conetxt/UuidContext";
import SearchBar from "./pages/SearchBar/SearchBar";

function App() {
    const [playerUuid, setPlayerUuid] = useState("ceść");
  return (
      <UuidContext.Provider value={{
          uuid: playerUuid,
          setUuid: (value) => setPlayerUuid(value),
      }}>
          <SearchBar/>
          <BrowserRouter>
              <Routes>
                    <Route path="/" element={<PlayerStats/>}/>
              </Routes>
          </BrowserRouter>
      </UuidContext.Provider>
  );
}

export default App;
