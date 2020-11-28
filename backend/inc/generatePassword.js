//npm modules
const generator = require('generate-password');

function generatePassword() {
    var password = generator.generate({
        length: 15,
        numbers: true
    });

    return password;
}

module.exports.generatePassword = generatePassword;