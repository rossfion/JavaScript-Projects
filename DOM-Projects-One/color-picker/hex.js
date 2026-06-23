const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //console.log('button clicked');
    //console.log(document.body);
    //const randomNumber = Math.random() * 2 + 1;
    /*const randomNumber = getRandomNumber();
    */
    //console.log(randomNumber)
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
    }
    //console.log(hexColor);


});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}