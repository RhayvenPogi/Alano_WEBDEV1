// Get the list container and error message element
const lenders = document.getElementById("nakautangs");
const error = document.getElementById("error-message");

// Handle save button click
document.getElementById("save-button").addEventListener("click", function () {
    // Get input values
    let name = document.getElementById("name").value.trim(); // Remove extra spaces
    let amount = parseFloat(document.getElementById("amount").value);

    // Validate inputs
    if (name === "" || isNaN(amount) || amount <= 0) {
        error.textContent = "Pogi, please fill in all fields with valid data.";
        error.classList.add("error");
        return;
    }

    // Clear error if valid
    error.classList.remove("error");
    error.textContent = "";

    // Create a new utang list item
    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - ₱" + amount;

    // Add to the list
    lenders.appendChild(newUtang);

    // Create the "PAID" button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "PAID";

    // Remove this utang when clicked
    newUtang.addEventListener("click", function () {
        lenders.removeChild(newUtang);
    });

    // Add the button to the list item
    newUtang.appendChild(removeBtn);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
});
