function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const relationship = document.getElementById('relationship').value;
  
    if (!name1 || !name2) {
      alert("Please enter both names!");
      return;
    }
  
    // Fun algorithm to calculate love percentage
    const combinedNames = (name1 + name2).toLowerCase();
    const total = combinedNames.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const lovePercentage = total % 101;
  
    // Generate a message based on the percentage
    let message = "";
    if (lovePercentage < 30) {
      message = "Hmm... there's room for improvement!";
    } else if (lovePercentage < 70) {
      message = "Not bad! Keep working on your bond.";
    } else {
      message = "Wow! You two are a perfect match!";
    }
  
    // Add relationship-specific suggestions
    let suggestion = "";
    switch (relationship) {
      case "partner":
        suggestion = "Plan a romantic date to strengthen your connection!";
        break;
      case "friend":
        suggestion = "Spend some quality time together and have fun!";
        break;
      case "family":
        suggestion = "Show appreciation with small gestures of love.";
        break;
      default:
        suggestion = "Keep nurturing your relationship!";
    }
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Love Percentage: <strong>${lovePercentage}%</strong></p>
      <p>${message}</p>
      <p>Suggestion: ${suggestion}</p>
    `;
  }
