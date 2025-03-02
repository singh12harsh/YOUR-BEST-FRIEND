document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    // Simple love calculation logic (for demonstration purposes)
    const loveScore = Math.floor(Math.random() * 100) + 1; // Random love score between 1 and 100

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `${name1} and ${name2}, your love score is: <strong>${loveScore}%</strong>`;
});
