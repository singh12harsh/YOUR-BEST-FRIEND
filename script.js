document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const dob1 = document.getElementById("dob1").value;
    const dob2 = document.getElementById("dob2").value;
    const relationshipType = document.getElementById("relationshipType").value;

    // Store user details in localStorage
    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    localStorage.setItem("dob1", dob1);
    localStorage.setItem("dob2", dob2);
    localStorage.setItem("relationshipType", relationshipType);

    // Display the result (for now, just log the values)
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerText = `Details saved! ${name1} and ${name2} are ready to calculate love!`;
});
