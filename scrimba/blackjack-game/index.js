// Blackjack game
//alert("working")

let player = {
    name: "Fionn",
    chips: 145
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
//console.log(cards);
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    // values from Ace to the King; returns a random number between 1 and 13
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }

}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    //console.log("button clicked");
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    //console.log(hasBlackJack);
    //console.log(message);
    messageEl.textContent = message;
}

function newCard() {
    //console.log("Drawing a new card from the deck!");
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

    if (isAlive === true && hasBlackJack === false) {
        let newcard = getRandomCard();
        sum += newcard;
        cards.push(newcard);
        //console.log(cards);
        renderGame();
    }


}
