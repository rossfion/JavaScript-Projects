// document.getElementById("count").innerText = 5;

// let count = 0;

// console.log(count);

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
//console.log(saveEl);

let count = 0;
function increment(){
    //count = count + 1;
    count += 1;
    //countEl.innerText = count;
    countEl.textContent = count;
    //console.log(count);
}
//increment();

function save(){
    let countInfo = " " + count + " - ";
    //saveEl.innerText += countInfo;
    saveEl.textContent += countInfo;
    //console.log(countInfo);
    // when the save button is clicked, reset 
    countEl.textContent = 0; // and also 
    count = 0;
}
//save()

console.log("Let's count people on the subway!");

// let myAge = 57;
// let humanDogRatio = 7 // 1 human year = 7 dog years

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;

// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

