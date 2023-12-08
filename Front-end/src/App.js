import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/navbar";
import Movies from "./components/movies/movies";
import Favmovies from "./components/movies/favmovies";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function App() {

  // const [fav, setFav] = useState(false);

  // const navigate = useNavigate();
  
  
  return (
    <div>


      <Routes>

        <Route path='/MoviesList' element={<Navbar />} />
        <Route path='/MoviesList' element={<Movies />} />
        <Route path='/fav' element={<Favmovies />} />


      </Routes>
     
      



    </div>
  );
}

export default App;
