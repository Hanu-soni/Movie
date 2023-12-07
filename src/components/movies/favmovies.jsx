import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Favmovies = () => {
  const [data, setData] = useState([]);

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
  function deletefunc(title){
    const response=axios.delete(`http://localhost:8080/delete/${title}`)
    console.log("hello");

     console.log(response);
     window.location.reload();
    // if(response.data.data.success===true){
    //   setData(data);
    // }

  }

  return (
    <div className="container bg-dark">
      {/* Render your data here */}
      {data.map((item) => (
         <div class="card gap-4" style={{width:"28rem",height:"25rem"}}>
         <img className="img-fluid card-img-top" src={`https://image.tmdb.org/t/p/w500${item.img}`} style={{height:"15rem",width:"40rem"}}  alt="..."/>
           <div class="card-body">
             <div className="d-flex flex-column justify-content-evenly">
             <h5 class="card-title">{item.title}</h5>
             <h6 className="card-text fw-bold">{item.date}</h6>
             <button onClick={()=>deletefunc(item.title)} className='btn btn-primary'>Delete</button>
            </div>
             
           </div>
           
       </div>
      ))}
    </div>
  );
};

export default Favmovies;
