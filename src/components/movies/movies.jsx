import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./movies.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Movies = () => {
  const [movies, Setmovies] = useState([]);

  // using useeffect
  const SearchData = useSelector((state) => state.search);

  

  
  
  const adddata = (title, img, date) => {
    // const apiUrl = '/add'; // Relative path to avoid CORS issues
  
    const data1 = {
      title: title,
      img: img,
      date: date
    };
    console.log(data1);
    const data=JSON.stringify(data1);
    console.log(data);
    if (data) {
      axios
        .post(
          `http://localhost:8080/add`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res);
          if(res.data.success===true){
              console.log("Execute the get axios")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  const Getmoveis = () => {
    axios
      .get(
        " http://www.omdbapi.com/?i=tt3896198&apikey=745c1591"
      )
      .then((res) => {
        if (res.status === 200) {
          Setmovies(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (SearchData.length === 0) {
      Getmoveis();
    }
  }, [SearchData]);

  useEffect(() => {
    if (SearchData.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=d75e0cd78e3a6733a0540dd3959c7572&query=${SearchData}`
        )
        .then((res) => {
          Setmovies(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [SearchData]);
  console.log(movies);



  
  return (

    <div style={{marginTop:"10px"}}>
      
    <div className="parent">
      
      
      {movies?.map((movie) => (
        // <div className="card" key={movie.id}>
        //   <img
        //     src={``}
        //     alt=""
        //   />

        // </div>
        <div class="card gap-4" style={{width:"28rem",height:"50rem"}}>
          <img className="img-fluid card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{height:"15rem",width:"40rem"}}  alt="..."/>
            <div class="card-body">
              <div className="d-flex flex-column justify-content-evenly">
              <h5 class="card-title">{movie.title}</h5>
              <h6 className="card-text fw-bold">{movie.release_date}</h6>
              <button onClick={() => adddata(movie.title,movie.poster_path,movie.release_date )} style={{width:"7rem"}} className="btn btn-primary d-flex"> favourite</button> 
              </div>
              
            </div>
            
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default Movies;
