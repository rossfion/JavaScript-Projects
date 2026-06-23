// select items
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// load items
window.addEventListener("DOMContentLoaded", setUpItems);

// edit options
let editElement;
let editFlag = false;
let editID = "";

// event listeners
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);

// functions

// add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        createListItems(id, value);
        displayAlert('item added', 'success');
        container.classList.add('show-container')

        addToLocalStorage(id, value);
        setBackToDefault();

    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        editLocalStorage(editID, value);
        setBackToDefault();

    } else {
        displayAlert('please enter value', 'danger')

    }
} // end function addItem(e)

function clearItems() {
    const items = document.querySelectorAll('grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('list cleared', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');

} // end function clearItems()

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`); // see style.css

    // remove alert
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`); // see style.css
    }, 1000);

}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'success');
    setBackToDefault();
    // remove from local storage by id
    removeFromLocalStorage(id);
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit';
}

// set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}
// local storage functions
function addToLocalStorage(id, value) {

    const grocery = { id, value }; // shorter ES6 syntax
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));

} // function editLocalStorage(id, value)

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function setUpItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItems(item.id, item.value);
        });
        container.classList.add('show-container');
    }

}

function createListItems(id, value) {
    const element = document.createElement('article');
    //add class
    element.classList.add('grocery-item');
    // add id dynamically
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);

}