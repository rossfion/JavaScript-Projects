/* Note: this file does not have to be a module that has to be exported. We can simply import it into the app.js file where it is to be used */
//console.log("HELLO WORLD"); // it works
"use strict"
import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form'); // no errors
const input = get('[name= drink'); // no errors

form.addEventListener('keyup', function(e) {
    e.preventDefault();
    //console.log(input.value); working
    const value = input.value;
    if(!value) return;
    presentDrinks(`${baseURL}${value}`);

}); // end form.addEventListener keyup event