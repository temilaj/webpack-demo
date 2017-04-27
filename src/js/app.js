// require('!style-loader!css-loader!./style.css')
require('../css/style.css')
let $ = require('jquery');
const people = require('./people.js');
 
people.forEach((person) =>{
    $('body').append(`<h1>${person.name}</h1>`)
})