import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/navbar";
import Movies from "./components/movies/movies";
import Favmovies from "./components/movies/favmovies";
import { useLocation } from 'react-router-dom';

function App() {

  // const [fav, setFav] = useState(false);
  //it is used to show only favourite movies when "Show-fav" button on navbar is clicked
  //Line 37 for more.
  let show; 
   const location = useLocation();
  if(location.pathname==='/fav'){
     show=false;
     console.log("hello")
  }
  else{
    show=true;
  }
  
  
  return (
    // this is the main Div including all components
    <div>  
      <Routes> 
        {/* This is the Top-bar of First-page having search-input and "Show-fav button" */}
        <Route path='/MoviesList' element={<Navbar />} /> 
        {/* this component will show list of movies searched by user */}
        <Route path='/MoviesList' element={<Movies />} />
        {/* this component is a seperate page which gets navigated on clicking show-fav button */}
        <Route path='/fav' element={<Favmovies />} />
      </Routes>
       {
        show && <Movies/> 
       }
    </div>
  );
}

export default App;
