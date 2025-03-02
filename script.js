document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").style.display = "block";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById("formMessage").style.display = "block"; // Show thank you message
    this.reset(); // Reset the form fields
});

document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").style.display = "block";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById("formMessage").style.display = "block"; // Show thank you message
    this.reset(); // Reset the form fields
});

// Love Calculator Functionality
document.getElementById("loveCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    
    // Simple love calculation logic
    const loveScore = Math.floor(Math.random() * 101); // Random love percentage between 0 and 100
    document.getElementById("loveResult").innerText = `${name1} and ${name2}, your love score is ${loveScore}%!`;
    document.getElementById("loveResult").style.display = "block"; // Show the result
});