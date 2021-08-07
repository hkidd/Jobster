const handleAppEdit = async (event) => {
  event.preventDefault();

  const applicationId = event.target.value;
  console.log(applicationId);

  const application_status = document.querySelector("#statusSel").value;

  console.log(application_status);

  // if (application_status) {
  //   const responseApp = await fetch(`/changeAppStatus/${applicationId}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       application_status: application_status,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (responseApp.ok) {
  //     document.location.replace("/");
  //   } else {
  //     alert("Failed to edit application status.");
  //   }
  // }
};

document
  .querySelector(".editAppForm")
  .addEventListener("submit", handleAppEdit);

// /editInt/${applicationId}
