import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/navbar";
import Movies from "./components/movies/movies";
import Favmovies from "./components/movies/favmovies";

function App() {
  return (
    <div>
     
      
          <Routes>
                  
                  <Route path='/' element={<Navbar/>}/>
                  <Route path='/' element={<Movies/>}/>
                  <Route path='/fav' element={<Favmovies/>}/>


          </Routes>
      
    
      <Movies></Movies>
    </div>
  );
}

export default App;
