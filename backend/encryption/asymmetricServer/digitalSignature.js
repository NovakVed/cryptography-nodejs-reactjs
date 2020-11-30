//node modules
const fs = require('fs');
const crypto = require("crypto")

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
})

function createSignatureFile(data) {
    const signature = crypto.sign("sha256", Buffer.from(data), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    })
    fs.writeFile('./files/digital_signature.txt', signature.toString("base64"), (err) => {
        if (err) throw err;
        console.log('digital_signature.txt has been saved!');
    });
    return signature.toString("base64");
}

function verifySignature(data, signature) {
    const isVerified = crypto.verify(
        "sha256",
        Buffer.from(data),
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        },
        Buffer.from(signature, 'base64')
    )
    return isVerified;
}

module.exports.createSignatureFile = createSignatureFile;
module.exports.verifySignature = verifySignature;