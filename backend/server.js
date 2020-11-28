const express = require('express');
const cors = require('cors');
const fs = require('fs');
const symmetricEncryption = require('./encryption/symmetricServer/symmetricEncryption');

const app = express();

//constants
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

app.post('/symmetricEncryptionPost', function (req, res) {
  const send = req.body.varString;
  symmetricEncryption.createFileSecretKeySymmetric();
  symmetricEncryption.createEncryptionFileSymmetric(send);

  res.send('Created encrypted file');
});

app.get('/symmetricEncryptionGet', function (req, res) {
  console.log('Server sends response');

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  //ERROR!! Ne želi se poslati JSON, niti učitati console.log(), dok se na samoj klasi ucitava!
  console.log(symmetricEncryption.readEncryptedFileSymmetric());
  res.end(JSON.stringify(symmetricEncryption.readEncryptedFileSymmetric()));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));