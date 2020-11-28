//node modules
const fs = require('fs');
const symmetricEncryption = require('./encryption/symmetricServer/symmetricEncryption');
const symmetricDecryption = require('./encryption/symmetricServer/symmetricDecryption');

//npm modules
const express = require('express');
const cors = require('cors');

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

//Symmetric encryption POST
app.post('/symmetricEncryptionPost', function (req, res) {
  const send = req.body.varString;
  symmetricEncryption.createFileSecretKeySymmetric();
  symmetricEncryption.createEncryptionFileSymmetric(send);

  res.send('Created encrypted file');
});

//Symmetric encryption GET
app.get('/symmetricEncryptionGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile('./encryptionFiles/symmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    res.end(JSON.stringify(data));
  });
});

//Symmetric decryption GET
app.get('/symmetricDecryptionGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile('./encryptionFiles/symmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    fs.readFile('./keys/tajni_kljuc.txt', 'utf8', function (err, secretKey) {
      if (err) { return console.log(err); }
      decryptedFile = symmetricDecryption.decrypt(data, secretKey);
      res.end(JSON.stringify(decryptedFile));
    });
  });
});

/* *********************************************************** */

//Asymmetric encryption POST
app.post('/asymmetricEncryptionPost', function (req, res) {
  const send = req.body.varString;
  symmetricEncryption.createFileSecretKeySymmetric();
  symmetricEncryption.createEncryptionFileSymmetric(send);

  res.send('Created encrypted file');
});

//Asymmetric encryption GET
app.get('/asymmetricEncryptionGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile('./encryptionFiles/asymmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    res.end(JSON.stringify(data));
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));