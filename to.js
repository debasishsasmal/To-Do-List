const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a 'delete' button (a span element)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' character
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";
}

// Add event listener to the whole list container
listContainer.addEventListener("click", function(e) {
    // If the user clicks on a list item (LI), toggle the 'checked' class
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    // If the user clicks on the delete button (SPAN), remove the parent list item
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);