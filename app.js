let $ = require('jquery');
const people = require('./people.js');
 
people.forEach((person) =>{
    $('body').append(`<h1>${person.name}</h1>`)
})