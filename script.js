
 // This function creates a new shopping list item.
function createItem() {
    // Get the text entered in the input box.
    let input = document.querySelector("#shopping-form input");
    let itemName = input.value;

    // Get the shopping list item template.
    let template = document.querySelector("#item-template");

    // Create a copy of the template and all its contents.
    let newItem = document.importNode(template.content, true);

    // Add the entered text to the new shopping list item.
    newItem.querySelector(".item-text").innerText = itemName;

    // Add a click event listener to the Remove button.
    newItem.querySelector(".remove-btn").addEventListener("click", removeShoppingListItem);

    // Add a click event listener to the list item for event bubbling.
    newItem.querySelector("li").addEventListener("click", removeShoppingListItem);

    // Add the completed item to the shopping list.
    document.querySelector("#shopping-list").appendChild(newItem);

    // Clear the input box after adding the item.
    input.value = "";
}

// This function removes a shopping list item when Remove is clicked.
function removeShoppingListItem(e) {
    // Check whether the Remove button was clicked.
    if (e.target.getAttribute("class") === "remove-btn" &&
        e.currentTarget.getAttribute("class") !== "remove-btn") {

        // Remove the entire list item from the shopping list.
        e.currentTarget.remove();
    }
}

// Connect the Add button to the createItem function.
document.querySelector("#shopping-form button").addEventListener("click", createItem);
