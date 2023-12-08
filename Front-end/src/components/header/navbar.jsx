import React, { useState} from "react";
import { getData } from "../Redux/reducers";
import "./navbar.css"; // for the styling
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  // this function will moniter all the changes
  let timer;
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Clear the previous timer if it exists
    clearTimeout(timer);

    // Set a new timer to delay the dispatch of the action
    timer = setTimeout(() => {
      // Dispatch the action after the debounce period (600ms)
      dispatch(getData(inputValue));
    }, 500);
    console.log(getData);
  };
  // const [fav, setFav] = useState(false);

  function Gotofav(){
    // if(fav===false)
    // {
    //   setFav(true);
    //   navigate('/fav');
    // }
    // else{
    //   setFav(false);
    //   navigate('/MoviesList');
    // }
    navigate('/fav');
   
  }

  return (
    <div style={{marginTop:"20px",height:"50px"}}  className="d-flex align-items-center justify-content-center gap-4">
      
      <div style={{height:"50px"}} className="bg-primary text-white fw-bold  d-flex flex-row justify-content-evenly">
      <input
        
          className="text-white fw-bold border border-primary"
          type="text"
          name=""
          placeholder="Search Movies"
          onChange={handleChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
        </svg>
      </div>
      <center>
        <div style={{ margin: "auto", height: "50px", width: "150px" }} className="d-flex align-items-center justify-content-center">
          <button className=" btn btn-primary" onClick={Gotofav}>Show Fav</button>
        </div>
      </center>
        
       
        
        
      
    </div>
  );
};

export default Navbar;