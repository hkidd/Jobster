// Front end js file for grabbing the user input and sending it to the back end
// If they are able to login successfully, they will be redirected to the homepage
// If not, error is displayed and can try to log in again

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

// Event listeners for the different pages
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
