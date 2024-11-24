document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
  
    // List of emails 
    const validEmails1 = [
      "momo@unitedpharmacy.sa",
      "alaa@unitedpharmacy.sa",
      "arafat@unitedpharmacy.sa"
    ];
    const validEmails2 = [
      "momo2@unitedpharmacy.sa",
      "alaa2@unitedpharmacy.sa",
      "arafat2@unitedpharmacy.sa"
    ]
  
    // Check if the entered email exists in the list of valid emails
    if (validEmails1.includes(email)) {
      window.location.href = "https://unitedtalentacademy.moodlecloud.com/login/index.php?username="+email; // Redirect to Google
    } else if(validEmails2.includes(email)) {
        window.location.href = "https://unitedpharmacyacademy.moodlecloud.com/login/index.php?username="+email; 
    } 
    else {
      alert("Email is not correct"); // Show an alert if the email is not found
    }
  });
  