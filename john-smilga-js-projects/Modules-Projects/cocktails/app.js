import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
// external API
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
    //console.log(presentDrinks(URL)); fulfilled though undefined
});