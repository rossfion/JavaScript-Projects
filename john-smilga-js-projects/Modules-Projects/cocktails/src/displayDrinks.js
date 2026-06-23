"use strict"
import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

// pass in the {drinks} object we acquired from the fetch url function in presentDrinks.js
const displayDrinks = ({drinks}) => {
    //return 'hello world';
    const section = get('.section-center');
    const title = get('.title');
    //console.log(drinks);
    if(!drinks){
        hideLoading();
        title.textContent = 'sorry, no drinks matched your search query';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        /* destructuring using the variables as recommended in the cocktails API */
        const {idDrink:id, strDrink:name, strDrinkThumb: image} = drink;
        return `<a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>`;
    }).join(""); // end const newDrinks
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;


}; // end const displayDrinks

export default displayDrinks;