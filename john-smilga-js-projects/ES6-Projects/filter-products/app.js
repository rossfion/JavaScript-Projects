// import products
let filteredProducts = [...products];

// select .products-container
const productsContainer = document.querySelector('.products-container');

// setup a function displayProducts, iterate over products, display them
const displayProducts = () => {
  
  if(filteredProducts.length < 1){
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search...</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts.map(({ id, title, image, price }) => {
    //const {id, title, image, price} = product;
    return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
  }).join(''); // end productsContainer.innerHTML
};
displayProducts();

// text filter
const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  // get the input value
  const inputValue = searchInput.value;
  //filter based on the input value
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  // call displayProducts
  displayProducts();
}); // end form.addEventListener for keyup event

//Filter buttons

// select .companies
const companiesDOM = document.querySelector('.companies');

// create function displayButtons
const displayButtons = () => {
  //get only unique companies (set; see lectures 274, 275 [Udemy])
  const buttons = [
    'all', ...new Set(products.map((product) => product.company)),
  ];
  //console.log(buttons)

  // iterate over results
  companiesDOM.innerHTML = buttons.map((company) => {
    // return button with data-id
    // companies innerHTML equal to result
    return `<button class='company-btn' data-id="${company}">${company}</button>`;

  }).join("");
};
displayButtons();

//Filter Based on Company









// add event listener on .companies
companiesDOM.addEventListener('click', (e) => {
  //console.log('button clicked')
  // look for event.target
  const el = e.target;
  // if contains .company-btn proceed
  if(el.classList.contains('company-btn')){
    // additional check: if 'all' return all products (copy)
    if(el.dataset.id === 'all'){
      filteredProducts = [...products];
      // else filter based on company value
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    // set search value to an empty string
    searchInput.value = '';
    // call displayProducts
    displayProducts();
  }
});