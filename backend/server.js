//node modules
const fs = require('fs');
var crypto = require('crypto');
const symmetricEncryption = require('./encryption/symmetricServer/symmetricEncryption');
const symmetricDecryption = require('./encryption/symmetricServer/symmetricDecryption');
const asymmetricEncryption = require('./encryption/asymmetricServer/asymmetricEncryption');
const asymmetricDecryption = require('./encryption/asymmetricServer/asymmetricDecryption');
const digitalSignature = require('./encryption/asymmetricServer/digitalSignature');

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

let setDirectoryPath = '';

//Read file text.txt
app.get('/textFileGet', function (req, res) {
  fs.readFile('./files/text.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    res.end(JSON.stringify(data));
  });
})

app.post('/textFilePost', function (req, res) {
  let send = req.body.varSelectedFile;
  setDirectoryPath = './files/' + send;

  fs.readFile(setDirectoryPath, 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    res.end(JSON.stringify(data));
  });
})

//Get all files from directory 'files'
app.get('/getAllFiles', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  const folder = './files/';
  let filesArr = [];
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      filesArr.push(file);
    });
    res.end(JSON.stringify(filesArr));
  });
})

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

  fs.readFile('./files/symmetric_encryption_file.txt', 'utf8', function (err, data) {
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

  fs.readFile('./files/symmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    fs.readFile('./files/tajni_kljuc.txt', 'utf8', function (err, secretKey) {
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
  asymmetricEncryption.createFilePublicKey();
  asymmetricEncryption.createFilePrivateKey();
  asymmetricEncryption.createEncryptionFile(send);

  res.send('Created encrypted file');
});

//Asymmetric encryption GET
app.get('/asymmetricEncryptionGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  //send res data from created encrypted file
  fs.readFile('./files/asymmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    res.end(JSON.stringify(data));
  });
});

//Asymmetric decryption GET
app.get('/asymmetricDecryptionGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile('./files/asymmetric_encryption_file.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    fs.readFile('./files/privatni_kljuc.txt', 'utf8', function (err, privateKey) {
      if (err) { return console.log(err); }
      decryptedFile = asymmetricDecryption.decrypt(data, privateKey);
      res.end(JSON.stringify(decryptedFile));
    });
  });
});

/* *********************************************************** */

//Hashing GET
app.get('/hashingGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile(setDirectoryPath, 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    let varHash = crypto.createHash('sha256').update(data).digest('hex');
    res.end(JSON.stringify(varHash));

    fs.writeFile('./files/hash.txt', varHash, (err) => {
      if (err) throw err;
      console.log('hash.txt has been saved!');
    });
  });
});

/* *********************************************************** */

//Digital signature
app.get('/digitalSignatureGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile(setDirectoryPath, 'utf8', function (err, data) {
    if (err) { return console.log(err); }

    res.end(JSON.stringify(digitalSignature.createSignatureFile(data)));
  });
});

//Digital signature check
app.get('/digitalSignatureCheckGet', function (req, res) {
  console.log('Server sends response');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  fs.readFile(setDirectoryPath, 'utf8', function (err, data) {
    if (err) { return console.log(err) }
    fs.readFile('./files/digital_signature.txt', 'utf8', function (err, signature) {
      if (err) { return console.log(err) }

      res.end(JSON.stringify(digitalSignature.verifySignature(data, signature)));
    })
  })
});

app.listen(port, () => console.log(`Server listening on port ${port}`));