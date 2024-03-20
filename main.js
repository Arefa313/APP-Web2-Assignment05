function isValidated() {
    console.log("Running isValidated function");
    var isValid = false;
    var textInput = document.getElementById('textInput').value;
    var dropdown = document.getElementById('dropdown').value;
    if (textInput.trim() === '') {
        document.getElementById('textInput').classList.add('border-red-500');
    } else {
        document.getElementById('textInput').classList.remove('border-red-500');
    }
    if (dropdown === '') {
        // Add a red color border around the dropdown if no option is chosen
        document.getElementById('dropdown').classList.add('border-red-500');
    } else {
        document.getElementById('dropdown').classList.remove('border-red-500');
    }
    if (textInput.trim() !== '' && dropdown !== '') {
        isValid = true;
    }
    return isValid;
}
function add() {
    console.log("Running add function");
    if (isValidated()) {
        var textInputValue = document.querySelector('#textInput').value;
        var dropdownValue = document.querySelector('#dropdown').value;
        console.log(dropdownValue);
        // Create a new list item
        var newItem = document.createElement('li');
            newItem.innerHTML = `
            <li class="m-3 pt-2">
            <span class="text-center">➡️${textInputValue}</span>  <span
                class="bg-green-300  rounded-full px-4 py-1 ml-4">${dropdownValue}<span>
        </li> `;
            if (dropdownValue == "fruit") {
                newItem.innerHTML = `
        <li class="m-3 pt-2">
                    <span>➡️${textInputValue}</span><span class="bg-pink-200 text-white rounded-full px-4 py-1 ml-4">${dropdownValue}</span>
                </li>`;
            } else if( dropdownValue == 'dairy') {
                newItem.innerHTML = `
            <li class="m-3 pt-2">
                        <span>➡️${textInputValue}</span><span class="bg-green-200 text-white rounded-full px-4 py-1 ml-4">${dropdownValue}</span>
                    </li>`;
            }
            else {
                newItem.innerHTML = `
        <li class="m-3 pt-2">
                    <span>➡️${textInputValue}</span><span class="bg-yellow-200 text-white rounded-full px-4 py-1 ml-4">${dropdownValue}</span>
                </li>
        `;
            
        }
        // Add the new list item to the existing list
        var list = document.getElementById('listItems');
        list.appendChild(newItem);

        document.getElementById('textInput').value = '';
        document.getElementById('dropdown').selectedIndex = 0;
    } else {
        console.log("Invalid inputs");
    }
}
document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    add(); // Call the add function
});


