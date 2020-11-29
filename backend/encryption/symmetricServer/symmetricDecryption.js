//node modules
const fs = require('fs');

//npm modules
const Cryptr = require('cryptr');

function decrypt(data, secretKey) {
    const cryptr = new Cryptr(secretKey);
    const decryptedString = cryptr.decrypt(data);

    createDecryptionFile(decryptedString);

    return decryptedString;
}

function createDecryptionFile(data) {
    fs.writeFile('./files/symmetric_decryption_file.txt', data, (err) => {
        if (err) throw err;
        console.log('symmetric_decryption_file.txt has been saved!');
    });
}

module.exports.decrypt = decrypt;