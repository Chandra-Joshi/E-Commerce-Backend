// DOM elements
const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");

// Button click event
fetchBtn.addEventListener("click", () => {
  output.innerHTML = "Fetching data...";

  // Example: Fetch data from backend API (replace URL if needed)
  fetch("/api/products")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        output.innerHTML = "No products found.";
        return;
      }
      // Display data
      output.innerHTML = data.map(item => `<p>${item.name} - $${item.price}</p>`).join("");
    })
    .catch(error => {
      output.innerHTML = `Error fetching data: ${error.message}`;
    });
});
