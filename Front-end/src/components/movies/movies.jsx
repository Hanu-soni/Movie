import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./movies.css";
import { useSelector } from "react-redux";

const Movies = () => {

  //this variable is used to set the array of movies based on Users search which 
  //we will get from the api provided.
  const [movies, Setmovies] = useState([]);
  //it is used to show a message to user if there is no data to show "NO MOVIES"
  //line-134
  const [Message, setMessage] = useState(false);

  // using useeffect

  //Navbar-->input-->Onchange-->redux-store-->movies-->SearchData
  const SearchData = useSelector((state) => state.search);
  // console.log("checker-error");

  //There is a favourite button in each movie
  //When fav button is clicked, post api call is executed 
  //to add title , img and date of that particular movie to database
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


  //This api is called whenever There is change in SearchData.It is getting
  //all the list of movies which matches Search of user
  const Getmoveis = () => {
    axios
      .get(
        " http://www.omdbapi.com/?i=tt3896198&apikey=d75e0cd78e3a6733a0540dd3959c7572"
      )
      .then((res) => {
        if (res.status === 200) {
          Setmovies(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      setMessage(true);
  };

  //this part was not working . Might be some logical-error.
  useEffect(() => {
    if (SearchData.length === 0) {
      Getmoveis();
    }
  }, [SearchData]);

      useEffect(() => {
    console.log("working")
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
    setMessage(false);
  }, [SearchData]);
  console.log(movies);



  
  return (

    <div style={{marginTop:"10px"}}>
    {/* this part executed when Message state is false i.e the length of movie 
    is more than 1   */}
    {
      !Message &&
      <div style={{marginTop:"40px"}} className="grid gap-0 row-gap-3 main">
      
      
      {movies?.map((movie) => (
        // <div className="card" key={movie.id}>
        //   <img
        //     src={``}
        //     alt=""
        //   />

        // </div>
        <div class="card p-2 mt-2 me-2  g-col-6 border border-dark " style={{width:"18rem",height:"25rem"}}>
          <img className="img-fluid card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{height:"15rem",width:"18rem"}}  alt="..."/>
            <div class="card-body">
              <div className="d-flex flex-column justify-content-evenly">
              <h5 class={movie.title.length>20?"card-title fs-6":"card=title fs-5"}>{movie.title.substring(0,30)}</h5>
              <h6 className="card-text fw-bold">{movie.release_date}</h6>
              <button onClick={() => adddata(movie.title,movie.poster_path,movie.release_date )} style={{width:"7rem"}} className="btn btn-primary d-flex"> favourite</button> 
              </div>
              
            </div>
            
        </div>
      ))}
      
    </div>
    }
    {/* If there is no data to show, it is executed */}
    {
      Message && 
      <center>
        <div style={{margin:"auto"}} className="d-flex justify-content-center align-items-center border border-white text-primary fw-bold">
      Please wait , the server is slow
    </div>
      </center>
    }
    </div>
  );
};

export default Movies;
