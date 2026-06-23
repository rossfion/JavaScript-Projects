import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    // returning unique companies using Set; convert it from an object to an array
    let companies = ['all', ...new Set(store.map((product) => product.company))];
    //console.log(companies);
    const companiesDOM = getElement('.companies');
    // iterate over the companies
    companiesDOM.innerHTML = companies.map((company) =>{
        return `<button class="company-btn">${company}</button> `
    }).join("");

    companiesDOM.addEventListener('click', function(e)  {
        const element = e.target;
        if(element.classList.contains('company-btn')){
            let newStore = [];
            if(element.textContent === 'all'){
                newStore = [...store];
            } else {
                newStore = store.filter((product) => product.company === e.target.textContent);
            }
            display(newStore, getElement('.products-container'), true);
        }

    });

};// end const setupCompanies

export default setupCompanies;
