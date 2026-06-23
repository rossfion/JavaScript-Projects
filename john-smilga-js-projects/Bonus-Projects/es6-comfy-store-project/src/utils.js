//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
// temporary single product
//const singleProductUrl = 
'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://www.course-api.com/javascript-store-single-product';

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  }).format((price/100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if(storageItem){
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;

};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
/*outoput fior single product {"id":"rec43w3ipXvP28vog","fields":{"company":"ikea","colors":["#f15025","#222"],"featured":true,"price":999,"name":"high-back bench","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","image":[{"id":"attcvDDMikF6G2iNi","width":1000,"height":639,"url":"https://course-api.com/images/store/product-1.jpeg","filename":"product-1.jpeg","size":62864,"type":"image/jpeg","thumbnails":{"small":{"url":"https://course-api.com/images/store/product-1.jpeg","width":56,"height":36},"large":{"url":"https://course-api.com/images/store/product-1.jpeg","width":801,"height":512},"full":{"url":"https://course-api.com/images/store/product-1.jpeg","width":3000,"height":3000}}}]}} */