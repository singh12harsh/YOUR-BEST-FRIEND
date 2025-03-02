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


// Assuming this is part of your existing script.js file

document.getElementById('nextButton').addEventListener('click', function() {
    const maleName = document.getElementById('maleName').value;
    const femaleName = document.getElementById('femaleName').value;

    // Show section 2
    document.getElementById('section2').style.display = 'block';
    calculateLove(maleName, femaleName);
});

const calculateLove = (maleName, femaleName) => {
    const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${maleName}&sname=${femaleName}`;
    
    fetch(API_URL, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
            'x-rapidapi-key': '###############', // Replace with your actual API key
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Love Percentage: ${data.percentage}%`;
    })
    .catch(err => {
        console.error(err);
        document.getElementById('result').innerText = 'Error calculating love percentage.';
    });
});

// Restart button functionality
document.getElementById('restartButton').addEventListener('click', function() {
    document.getElementById('section2').style.display = 'none';
    document.getElementById('maleName').value = '';
    document.getElementById('femaleName').value = '';
});
