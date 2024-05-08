document.getElementById("signupBtn").addEventListener("click", function() {
    const name = document.getElementById("signupName").value;
    const surname = document.getElementById("signupSurname").value;
    const phone = document.getElementById("signupPhone").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    // Perform signup logic here
    if (name && surname && phone && email && password) {
      // You can add additional validation here if needed
      // If signup is successful, you can redirect the user to the dashboard or another page
      window.location.href = "dashboard.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
  