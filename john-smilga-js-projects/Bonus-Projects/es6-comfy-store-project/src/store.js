import { getStorageItem, setStorageItem } from './utils.js';
//let store = [];
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product) => {
        //console.log(products)
        //destructure the data
        const { id, fields: { featured, name, price, company, colors, image: img },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, price, company, colors, image };
    });
    setStorageItem('store', store);
};
//console.log(store);
const findProduct = (id) => { 
    // this gets fed to setupCart
    let product = store.find((product) => product.id === id)
    return product;
    //console.log(product)
};
export { store, setupStore, findProduct };
