const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if(filePath === undefined) {
    throw new Error('Invalid path');
}

const goodFiles = [];
const badFiles = [];

fs.readdirSync(filePath).forEach(file => {

    if(!file.match(/(^[A-Z][a-z]+_[A-Z][a-z]+_[A-Z0-9]+_[A-Z\-]+.([a-z0-9]{3,4}))/)) {
        badFiles.push(file);
    } else {
        goodFiles.push(file);
    }
});

console.log("Les mauvais fichiers sont :");
badFiles.forEach(el => console.log(el));

console.log("Les bons fichiers sont :");
goodFiles.forEach(el => console.log(el));
