"use strict"
import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
    showLoading();
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}; // end const fetchDrinks

export default fetchDrinks;