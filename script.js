document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name1 = document.getElementById("name1").value;
    const dob1 = document.getElementById("dob1").value;
    const name2 = document.getElementById("name2").value;
    const dob2 = document.getElementById("dob2").value;
    const relationshipType = document.getElementById("relationshipType").value;

    // Open a new window
    const newWindow = window.open("", "_blank", "width=600,height=400");

    // Calculate love percentage (dummy calculation for demonstration)
    const lovePercentage = Math.floor(Math.random() * 100) + 1; // Random percentage for demo

    // Tips based on relationship type
    let tips = "";
    switch (relationshipType) {
        case "friend":
            tips = "Friendship is built on trust and communication.";
            break;
        case "family":
            tips = "Family bonds are strengthened through love and support.";
            break;
        case "partner":
            tips = "Romantic relationships thrive on understanding and respect.";
            break;
        // Add more cases as needed
       
