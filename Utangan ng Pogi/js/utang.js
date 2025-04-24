const lenders = document.getElementById("nakautangs");
const error = document.getElementById("error-message");

document.getElementById("save-button").addEventListener("click", function () {
    // Get the values from the input fields
    let name = document.getElementById("name").value.trim(); // Trim to remove extra spaces
    let amount = parseFloat(document.getElementById("amount").value);

    // Validate the input fields
    if (name === "" || isNaN(amount) || amount <= 0) {
        error.textContent = "Pogi, please fill in all fields with valid data.";
        error.classList.add("error");
        return;
    }

    // Clear the error message if validation passes
    error.classList.remove("error");
    error.textContent = "";

    // Create a new list item for the lender
    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - ₱" + amount; 
    lenders.appendChild(newUtang);

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
});