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
        case "sibling":
            tips = "Siblings should always support each other.";
            break;
        case "parent":
            tips = "Parents should nurture and guide their children.";
            break;
        case "child":
            tips = "Children need love and attention to grow.";
            break;
        case "cousin":
            tips = "Cousins can be great friends and confidants.";
            break;
        case "aunt":
            tips = "Aunts can provide a different perspective and support.";
            break;
        case "uncle":
            tips = "Uncles can be fun and supportive figures.";
            break;
        case "grandparent":
            tips = "Grandparents offer wisdom and love.";
            break;
        case "relative":
            tips = "Family ties should be cherished.";
            break;
        case "colleague":
            tips = "Work relationships should be professional yet friendly.";
            break;
        case "neighbor":
            tips = "Good neighbors contribute to a happy community.";
            break;
        case "classmate":
            tips = "Classmates can become lifelong friends.";
            break;
        case "fiancé":
            tips = "Engagement is a step towards a lifelong commitment.";
            break;
        case "ex":
            tips = "Learn from past relationships to grow.";
            break;
        case "mentor":
            tips = "Mentors can guide you in your personal and professional life.";
            break;
        case "teacher":
            tips = "Teachers shape the future of their students.";
            break;
        case "best_friend":
            tips = "Best friends are there for you through thick and thin.";
            break;
        case "pet":
            tips = "Pets provide unconditional love and companionship.";
            break;
        default:
            tips = "Every relationship is unique and requires effort.";
    }

    // Create content for the new window
    newWindow.document.write(`
        <html>
            <head>
                <title>Love Percentage Result</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f8ff;
                        color: #333;
                        padding: 20px;
                    }
                    h2 {
                        color: #ff69b4;
                    }
                    #leaderboard {
                        margin-top: 20px;
                        border: 1px solid #ccc;
                        padding: 10px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <h2>Love Percentage</h2>
                <p>${name1} & ${name2} have a love percentage of <strong>${lovePercentage}%</strong>.</p>
                <h3>Tips for Improvement:</h3>
                <p>${tips}</p>
                <div id="leaderboard">
                    <h3>Leaderboard</h3>
                    <ul>
                        <li>1. User A - 95%</li>
                        <li>2. User B - 90%</li>
                        <li>3. User C - 85%</li>
                        <li>4. User D - 80%</li>
                        <li>5. User E - 75%</li>
                    </ul>
                </div>
            </body>
        </html>
    `);
});
            
       
