//node modules
const fs = require('fs');

//npm modules
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

function createFileDigitalSignature(data) {
    let sign = key.sign(data);
    fs.writeFile('./files/digital_signature.txt', sign, (err) => {
        if (err) throw err;
        console.log('digital_signature.txt has been saved!');
    });
}

function checkSignDocument(NodeRSAData){
    fs.readFile(setDirectoryPath, 'utf8', function (err, signature) {
        if (err) { return console.log(err); }
        
        if(key.verify(data, signature)) return true;
        else return false;
    });
}

module.exports.createFileDigitalSignature = createFileDigitalSignature;
module.exports.checkSignDocument = checkSignDocument;