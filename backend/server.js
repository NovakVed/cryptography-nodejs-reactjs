const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const port = 3001;

//use cors to allow cross origin resource sharing
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let t = '';


app.get('/get', function (req, res) {
    console.log('Server sends response');

    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    t = t + ' Vracanje odgovora!!!'; 
    res.end(JSON.stringify(t));
});

app.post('/send', function(req, res) {
    const send = req.body.varString ;
    t = send;

	res.send('String is sent');
  });

app.listen(port, () => console.log(`Server listening on port ${port}`));