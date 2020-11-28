//node modules
const fs = require('fs');
const generatePassword = require('../../inc/generatePassword');

//npm modules
const Cryptr = require('cryptr');

let secretKey = '';

function generateSecretKey() {
    secretKey = generatePassword.generatePassword();
}

function createFileSecretKey() {
    generateSecretKey();
    fs.writeFile('./keys/tajni_kljuc.txt', secretKey, (err) => {
        if (err) throw err;
        console.log('tajni_kljuc.txt has been saved!');
    });
}

function createEncryptionFile(data) {
    const cryptr = new Cryptr(secretKey);
    const encryptedString = cryptr.encrypt(data);

    fs.writeFile('./encryptionFiles/symmetric_encryption_file.txt', encryptedString, (err) => {
        if (err) throw err;
        console.log('symmetric_encryption_file.txt has been saved!');
    });
}

module.exports.createFileSecretKeySymmetric = createFileSecretKey;
module.exports.createEncryptionFileSymmetric = createEncryptionFile;