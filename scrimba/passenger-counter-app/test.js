// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown();
// countdown();

// function logNumber(){
//     console.log(42);
// }
// logNumber();

// function myLogger() {
//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36

//     let totalLaps = lap1 + lap2 + lap3;
//     console.log(totalLaps);

// }
// myLogger();

// let bonusPoints = 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;

// console.log(bonusPoints);

// let lapsCompleted = 0;
// function countLaps(){
//     lapsCompleted = lapsCompleted + 1;
// }
// countLaps();
// countLaps();
// countLaps();

// console.log(lapsCompleted);

// let username = "Fionn";

// let message = "You have three new notifications";

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Fionn";

// let greeting = "Hello, my name is ";

// let myGreeting = greeting + name + "!";

// console.log(myGreeting);

// Strings and numbers
// In a battle between strings and numbers, strings always win
// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Fionn";

// let greeting = "Hello, my name is ";

// let myGreeting = greeting + name + "!";

// welcomeEl.innerText = myGreeting;

//welcomeEl.innerText = welcomeEl.innerText + "" // TODO: add the emoji within the string

//welcomeEl.innerText +=  "";

// varaibles practice

// Create two variables, firstName and lastName
let firstName = "Fionn";
let lastName = "Ross";

// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName;

// Log fullName to the console
console.log(fullName);

// concatenating strings
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function myGreeting(){
    console.log(greeting + ", " + name + "!");
}
myGreeting();

// Incrementing and decrementing review

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // 14
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

// rendering an error message