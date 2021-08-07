const intEditBtn = async (event) => {
  event.preventDefault();

  const applicationId = event.target.value;
  console.log(applicationId);

  if (applicationId) {
    const responseInt = await fetch(`/api/interview-routes/editInt/${applicationId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (responseInt.ok) {
      document.location.replace(`/api/interview-routes/editInt/${applicationId}`);
    } else {
      alert("Failed to edit interview.");
    }
  }
};

document.querySelectorAll(".editInt").forEach((btn) => {
btn.addEventListener("click", intEditBtn);
});