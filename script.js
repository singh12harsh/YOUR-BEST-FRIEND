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
// Existing love calculation code...

// Tips array
const tips = [
    "Communicate openly and honestly with each other.",
    "Spend quality time together, away from distractions.",
    "Show appreciation for each other regularly.",
    "Be supportive of each other's goals and dreams.",
    "Resolve conflicts calmly and respectfully.",
    "Keep the romance alive with small gestures.",
    "Listen actively and validate each other's feelings."
];

// Show tips on button click
document.getElementById("showTipsButton").addEventListener("click", function() {
    const tipsList = document.getElementById("tipsList");
    tipsList.innerHTML = ""; // Clear existing tips

    tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
    });
});
