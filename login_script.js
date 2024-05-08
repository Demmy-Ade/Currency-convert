document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    // Perform login logic here
    if (email && password) {
      // You can add additional validation here if needed
      // If login is successful, you can redirect the user to the dashboard or another page
      window.location.href = "dashboard.html";
    } else {
      alert("Please enter email and password.");
    }
  });
  