document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value.trim();
    const address = document.getElementById("address").value.trim();
  
    if (name && email && phone && dob && gender && course && address) {
      // Store data to localStorage (for demo purposes)
      localStorage.setItem("studentName", name);
      localStorage.setItem("studentCourse", course);
  
      // Redirect to confirmation page
      window.location.href = "confirm.html";
    } else {
      alert("Please fill all fields correctly.");
    }
  });