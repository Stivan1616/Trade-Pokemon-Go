const fs = require('fs');
const gigamax = fs.readFileSync('unnamed-removebg-preview.png', 'base64');
const shiny = fs.readFileSync('GNqstspbIAAZ-UN-removebg-preview.png', 'base64');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/src="unnamed-removebg-preview\.png"/g, 'src="data:image/png;base64,' + gigamax + '"');
html = html.replace(/src="GNqstspbIAAZ-UN-removebg-preview\.png"/g, 'src="data:image/png;base64,' + shiny + '"');

fs.writeFileSync('index.html', html);
console.log('Images successfully replaced with base64 data URIs');
