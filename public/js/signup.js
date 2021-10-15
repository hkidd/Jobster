// Here, this file is grabbing the user input from the sign up sheet
// This should then be sent to the back end at /api/users to POST a new user
// If successful, they are routed to the homepage
// If not, error is displayed and can try to sign up again

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#firstname-signup").value.trim();
  const last_name = document.querySelector("#lastname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const image_url = "/public/images/StaticLogo.png"

  if (first_name && last_name && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ first_name:first_name, last_name:last_name, email:email, password:password, image_url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Welcome to Jobster!");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);