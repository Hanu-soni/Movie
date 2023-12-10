import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Favmovies = () => {

  //this variable stores the data get from back-end on  **GET**-api call when page
  //loads
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/getFav',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  //This function is called on "delete button". here, an api **DELETE** called when user deletes a movie from fav-list
  function deletefunc(title){
    const response=axios.delete(`http://localhost:8080/delete/${title}`)
    console.log("hello");

     console.log(response);
     window.location.reload();
    // if(response.data.data.success===true){
    //   setData(data);
    // }

  }
  //There is button Goback onClick , will navigate to page-1
  function Goback(){
    navigate('/MoviesList')
  }

  return (
    <div className="container bg-dark">
      {/* Render your data here */}
      <center style={{marginTop:"10px"}}><button onClick={Goback} className='btn btn-primary'>Go Back</button></center>
      <div className='gap-5 pt-3 d-flex justify-content-center align-items-center flex-column'>
      
      {/* Mapping the data got from mysql-db in table "movies" and listing item.date,title
      and image which will save space in real time scenrio */}
      {data.map((item) => (
         <div class="card gap-4 mt-3" style={{width:"28rem",height:"25rem"}}>
         <img className="img-fluid card-img-top" src={`https://image.tmdb.org/t/p/w500${item.img}`} style={{height:"15rem",width:"40rem"}}  alt="..."/>
           <div class="card-body">
             <div className="d-flex flex-column justify-content-evenly">
             <h5 class="card-title">{item.title}</h5>
             <h6 className="card-text fw-bold">{item.date}</h6>
             <button onClick={()=>deletefunc(item.title)} className='btn btn-primary' style={{width:"5rem"}}>Delete</button>
            </div>
             
           </div>
           
       </div>
      ))}
      </div>
    </div>
  );
};

export default Favmovies;
