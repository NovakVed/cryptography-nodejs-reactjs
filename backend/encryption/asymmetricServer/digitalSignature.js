//node modules
const fs = require('fs');

//npm modules
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

function createFileDigitalSignature(data) {
    console.log(data);
    let sign = key.sign(data, 'base64');
    fs.writeFile('./files/digital_signature.txt', sign, (err) => {
        if (err) throw err;
        console.log('digital_signature.txt has been saved!');
    });
    return sign;
}

function checkSignDocument(NodeRSAData) {
    fs.readFile('./files/digital_signature.txt', 'utf8', function (err, signature) {
        if (err) { return console.log(err); }
        console.log(NodeRSAData);
        console.log(signature);
        if (key.verify(NodeRSAData, signature)) {
            console.log('radi');
            return true;
        } else return false;
    });
}

module.exports.createFileDigitalSignature = createFileDigitalSignature;
module.exports.checkSignDocument = checkSignDocument;