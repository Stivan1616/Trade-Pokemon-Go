const fs = require('fs');
const gigamax = fs.readFileSync('unnamed-removebg-preview.png', 'base64');
const shiny = fs.readFileSync('GNqstspbIAAZ-UN-removebg-preview.png', 'base64');
fs.writeFileSync('b64.json', JSON.stringify({gigamax, shiny}));
