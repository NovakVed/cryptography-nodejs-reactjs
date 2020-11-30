//node modules
const fs = require('fs');

//npm modules
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

function createFileDigitalSignature(data) {
    let sign = key.sign(data, 'base64');
    fs.writeFile('./files/digital_signature.txt', sign, (err) => {
        if (err) throw err;
        console.log('digital_signature.txt has been saved!');
    });
    return sign;
}

function checkSignDocument(data, signature) {
    return key.verify(Buffer.from(data, 'utf8'), Buffer.from(signature, 'base64'));
}

module.exports.createFileDigitalSignature = createFileDigitalSignature;
module.exports.checkSignDocument = checkSignDocument;