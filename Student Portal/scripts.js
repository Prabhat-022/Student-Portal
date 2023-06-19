
var form = document.getElementById('form');
var itemList = document.getElementById('items');
var input = document.getElementById('input');
var filters = document.getElementById('search');

// Form submit event
form.addEventListener('submit', addItems);

// Delete Event
itemList.addEventListener('click', removeItems);

// filter Event
filters.addEventListener('keyup', filterItem);

// Add Items
function addItems(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('input').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    var deleteBtn = document.createElement('button')

    // add class in delete button
    deleteBtn.className = 'btn';

    // Apend text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Apend button to li
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    // fields empaty
    input.value =' ';
}

// remove item
function removeItems(e) {
    if (e.target.classList.contains('btn')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// filter item
function filterItem(e) {
    // convert  text to lowercase
    var text = e.target.value.toLowerCase();

    // Get li
    var itemms = itemList.getElementsByTagName('li');

    // Conver to an array
    Array.from(itemms).forEach(function (items) {
        var itemName = items.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            items.style.display = 'block';
        }
        else {
            items.style.display = 'none';
        }
    })

}