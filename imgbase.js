//convertir imagen base 64
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'img/item17recotte.jpg');
const base64Image = fs.readFileSync(imagePath, 'base64');


