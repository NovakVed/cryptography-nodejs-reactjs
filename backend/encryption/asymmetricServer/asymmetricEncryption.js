//node modules
const fs = require('fs');

//npm modules
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });


function createFilePrivateKey() {
    let private_key = key.exportKey('private');
    fs.writeFile('./keys/privatni_kljuc.txt', private_key, (err) => {
        if (err) throw err;
        console.log('privatni_kljuc.txt has been saved!');
    });
}

function createFilePublicKey() {
    let public_key = key.exportKey('public');
    fs.writeFile('./keys/javni_kljuc.txt', public_key, (err) => {
        if (err) throw err;
        console.log('javni_kljuc.txt has been saved!');
    });
}

function createEncryptionFile(data) {
    var encryptedString = key.encrypt(data, 'base64');
    fs.writeFile('./encryptionFiles/asymmetric_encryption_file.txt', encryptedString, (err) => {
        if (err) throw err;
        console.log('asymmetric_encryption_file.txt has been saved!');
    });
}

module.exports.createFilePrivateKey = createFilePrivateKey;
module.exports.createFilePublicKey = createFilePublicKey;
module.exports.createEncryptionFile = createEncryptionFile;