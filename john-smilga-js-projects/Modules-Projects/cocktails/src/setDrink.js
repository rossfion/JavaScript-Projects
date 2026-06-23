"use strict"
const setDrink = (section) => {
    //console.log(section);
    section.addEventListener('click', function(e){
        //e.preventDefault();
        const id = e.target.parentElement.dataset.id;
        //console.log(e.target);
        //console.log(id);
        localStorage.setItem('drink', id);

    });
}; // const setDrink

export default setDrink;