// product.js setup

// - select .product
const productDOM = document.querySelector('.product');
// - get single product url
const url = 'https://www.course-api.com/javascript-store-single-product';

// #### Loading, Error, Fetch Single Product

// - setup fetchProduct(),displayProduct(),start()
const fetchProduct = async () => {
    try {
        productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;

    } catch (error) {
        productDOM.innerHTML = '<p class="error">There was a problem loading the product. Please try again later </p>';
    }
}; // const fetchProduct

// #### Display Single Product

const displayProduct = (product) => {
    const {
        company,
        colors,
        description,
        name: title,
        price,
        image,
    } = product.fields;
    const { url: img } = image[0];
    document.title = title.toUpperCase();

    // #### Display Colors

    // colors
    const colorsList = colors.map((color) => {
        return `<span class="product-color" style="background": ${color}></span>`

    }).join("");

    productDOM.innerHTML = `<div class="product-wrapper">
    <img src="${img}" class="img" alt="${title}" />
    <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${price / 100}</span>
      <div class="colors">
        ${colorsList}
        
      </div>
      <p>
       ${description}
      </p>
      <button class="btn">add to cart</button>
    </div>
  </div>`;
}// end const displayProduct

// - create start()
const start = async () => {
    // invoke fetchProduct and displayProduct in start
    const data = await fetchProduct();
    displayProduct(data);

};
start();
