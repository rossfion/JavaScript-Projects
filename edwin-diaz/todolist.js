// the main function for creating todo items
function createNewElement() {
    const listItem = document.createElement('li');
    const inputValue = document.getElementById('todolist-input').value;
    const textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode)

    if (inputValue === "") {
        alert("This cannot be empty!");
    } else {
        document.getElementById("todolist-ul").appendChild(listItem);
    }

    document.getElementById("todolist-input").value = "";

    const spanTag = document.createElement("SPAN");
    const closeUniChar = document.createTextNode("\u00D7");
    spanTag.className = "close";
    spanTag.appendChild(closeUniChar);
    listItem.appendChild(spanTag);

    // removing items from the todo list when the span close button is clicked

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            let theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}

// creating the close buttons for lists that are not created with the main function

const myList = document.getElementsByTagName("li");
let index;
for (index = 0; index < myList.length; index++) {
    const spanTag = document.createElement("SPAN");
    const closeUniChar = document.createTextNode("\u00D7");
    spanTag.className = "close";
    spanTag.appendChild(closeUniChar);
    myList[index].appendChild(spanTag)
}

// close button
const closeButton = document.getElementsByClassName("close");
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        let theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}

// creating checked todos

const ulList = document.querySelector("ul");
ulList.addEventListener('click', function (event) {
    console.log(event);
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    }
}, false);

