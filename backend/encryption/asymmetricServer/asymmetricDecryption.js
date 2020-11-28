//node modules
const fs = require('fs');

//npm modules
const NodeRSA = require('node-rsa');

function decrypt(data, privateKey) {
    let private_key = new NodeRSA(privateKey);
    
    console.log(data);
    let decryptedString = private_key.decrypt(data, 'utf8');
    console.log(decryptedString);
    //createDecryptionFile(decryptedString);

    return 'decryptedString';
}

function createDecryptionFile(data) {
    fs.writeFile('./encryptionFiles/asymmetric_decryption_file.txt', data, (err) => {
        if (err) throw err;
        console.log('asymmetric_decryption_file.txt has been saved!');
    });
}

module.exports.decrypt = decrypt;