const appEditBtn = async (event) => {
  event.preventDefault();

  const applicationId = event.target.value;
  console.log(applicationId);

  if (applicationId) {
    const responseApp = await fetch(`/editApp/${applicationId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (responseApp.ok) {
      document.location.replace(`/editApp/${applicationId}`);
    } else {
      alert("Failed to edit application.");
    }
  }
};

document.querySelectorAll(".editApp").forEach((btn) => {
  btn.addEventListener("click", appEditBtn);
});