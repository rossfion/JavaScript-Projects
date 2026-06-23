const instrumentsArr = [
    {category: "woodwinds", instrument: "Flute", price: 500},
    {category: "woodwinds", instrument: "Clarinet", price: 200},
    {category: "woodwinds", instrument: "Oboe", price: 4000}
];

// step 7
let selectContainer = document.query('.select-container');
let productsContainer = document.query('.products-container');

// step 8
selectContainer.addEventListener("change", () => {
  console.log("this is a test");
});

// modified at step 9
selectContainer.addEventListener("change", () => {
  console.log(`${selectContainer.value}`);
  // step 10
  const res = instrumentCards(selectContainer.value);
  console.log(res);
  // step 13
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});

// modified at step 10

const selectContainer = document.query('select');
const productsContainer = document.query('.products-container');

// step 10
function instrumentCards(instrumentCategory) {
  const filter = instrumentsArr.filter((element) => element.category === instrumentCategory);
  if(instrumentCategory === "all"){
	  return instrumentsArr;
  }
  
  return filter;
}

// step 12
const instrumentsString = instruments.map((element) => {
	`HTML string with ${instruments.instrument} ${instruments.price}`;
	
});
return instrumentsString;

//at step 14 add .join(""); at the end of the rreturn instruments block

/////////////// completed version ////////
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
]

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  return instruments
    .map(({ instrument, price }) => {
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    }).join("");
}
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});