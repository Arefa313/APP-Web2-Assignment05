
let list = [];

document.querySelector("#addButton").addEventListener("click", function(e) {
    e.preventDefault();
    add();
});
// Deleting a list item
document.querySelector("#listItems").addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        let listItems = e.target.parentNode;
        const index = Array.from(listItems.parentNode.children).indexOf(listItems);
        if (index !== -1) {
            list.splice(index, 1);
            addItemToList();
            listItems.remove();
            localStorage.setItem("list", JSON.stringify(list)); 
        }
    }
});
function add() {
    console.log("Running add function");

    const inputText = document.getElementById("textInput");
    const category = document.getElementById("dropdown");
    let newItem = inputText.value.trim();
    let dropDown = category.value;

    // Validating
    if (isValidated(newItem, dropDown)) {
        list.push({ name: newItem, category: dropDown });
        localStorage.setItem("list", JSON.stringify(list)); 
        addItemToList(); 
        inputText.value = "";
        category.value = "";
    } else {
        console.log("Invalid inputs");
    }
}

// Function to display the list items on the browser
function addItemToList() {
    const listItems = document.querySelector("#listItems");
    listItems.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const listItem = document.createElement("li");
        listItem.classList.add( "py-2", "border-b");
        listItem.innerHTML = `
            <span class="m-3">➡️ ${item.name}</span>
            <span class="ml-3 rounded-full px-2 py-1 ${categorySelected(item.category)}">
            ${item.category}</span>`;
            listItems.appendChild(listItem);
    }
}
// Load list items from local storage when the script runs
const localStorageNewItem = localStorage.getItem("list");
if (localStorageNewItem) {
    list = JSON.parse(localStorageNewItem);
    addItemToList();
}

// set backgroundcolor to  options selected
function categorySelected(option) {
    const categoryOptions = {
      "fruit": "bg-pink-200",
      "dairy": "bg-green-200",
      "grain": "bg-yellow-200",
    };
    return categoryOptions[option];
}

function isValidated() {
    console.log("Running isValidated function");
    var isValid = false;
    var textInput = document.getElementById('textInput').value;
    var dropdown = document.getElementById('dropdown').value;
    if (textInput.trim() === '') {
        document.getElementById('textInput').classList.add('border-b', 'border-red-500');
    } else {
        document.getElementById('textInput').classList.remove('border-b', 'border-red-500');
    }
    if (dropdown === '') {
        // Add a red color border around the dropdown if option is not selected
        document.getElementById('dropdown').classList.add('border-red-500');
    } else {
        document.getElementById('dropdown').classList.remove('border-red-500');
    }
    if (textInput.trim() !== '' && dropdown !== '') {
        isValid = true;
    }
    return isValid;
}










