
const hbs = require('hbs');


//HBS helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})