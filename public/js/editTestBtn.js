const testEditBtn = async (event) => {
    event.preventDefault();
  
    const applicationId = event.target.value;
    console.log(applicationId);
  
    if (applicationId) {
      const responseTest = await fetch(`/api/test-routes/editTest/${applicationId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (responseTest.ok) {
        document.location.replace(`/api/test-routes/editTest/${applicationId}`);
      } else {
        alert("Failed to edit test.");
      }
    }
  };
  
  document.querySelectorAll(".editTest").forEach((btn) => {
  btn.addEventListener("click", testEditBtn);
  });