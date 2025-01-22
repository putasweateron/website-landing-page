document.getElementById("email-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    if (validateEmail(email)) {
      console.log("Email submitted:", email);
      alert("Thank you! We'll keep you updated.");
    } else {
      alert("Please enter a valid email address.");
    }
   });
   
   function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
   }
   