const con = require('./connection');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/getFav', (req,res)=>{
    con.query("select * from  movieslist ",(err,result)=>{
      if (err) {
        console.error('Error inserting into movieslist table:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.send({
            message:" Added to favourite ",
            success:true
        });
      }
    });
});

app.post('/add', (req, res) => {
    const { title, img, date } = req.body;
  
    if (!title || !img || !date) {
      return res.status(400).json({ error: 'Invalid input. Please provide title, img, and date.' });
    }
  
    con.query("INSERT INTO movieslist (title, img, date) VALUES (?, ?, ?)", [title, img, date], (err, result) => {
      if (err) {
        console.error('Error inserting into movieslist table:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.send({
            message:" Added to favourite ",
            success:true
        });
      }
    });
  });
  


app.listen(8080);
console.log("Server is running on port 3000")
