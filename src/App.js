import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/navbar";
import Movies from "./components/movies/movies";
import Favmovies from "./components/movies/favmovies";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate=useNavigate();
  function Gotofav(){
    navigate('/fav');
    
    
  }
  return (
    <div>
     
     
          <Routes>
                  
                  <Route path='/MoviesList' element={<Navbar/>}/>
                  <Route path='/MoviesList' element={<Movies/>}/>
                  <Route path='/fav' element={<Favmovies/>}/>


          </Routes>
          <center>
      <div style={{margin:"auto",height:"50px",width:"150px"}} className="d-flex align-items-center justify-content-center">
      <button className=" btn btn-primary" onClick={Gotofav}>Show Fav</button>
      </div>
      </center>
      <Movies/>
      
    
         
    </div>
  );
}

export default App;
