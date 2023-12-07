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
  };
  function Gotofav(){
    navigate('/fav');
  }

  return (
    <div style={{marginTop:"20px"}}  className="d-flex align-items-center justify-content-center gap-4">
      
      
        <input
        
        className="bg-primary text-white fw-bold"
          type="text"
          name=""
          placeholder="Search Movies"
          onChange={handleChange}
        />
       
        
        
      
    </div>
  );
};

export default Navbar;
