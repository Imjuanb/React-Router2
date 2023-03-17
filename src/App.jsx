import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pokemones from "./Pages/Pokemones";
import Pokemon from "./Pages/Pokemon"

import { Route, Routes } from "react-router-dom";

export default function App() {
return (
    <div>
      <Navbar />
      
      <main>
        <Routes>
          <Route 
          element={<Home />}
          path="/"
          />
          <Route 
          element={<Pokemones />}
          path="/Pokemones"
          />
          <Route 
          element={<Pokemon />}
          path="/Pokemones/:name"
          />
        </Routes>
      </main>
    </div>
  )
}