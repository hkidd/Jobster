// We most likely need a front end js file that will run 3 routes (Application, Interview, and Test), after collecting the user input from the newApp handlebar page

const editAppFormHandler = async (event) => {
    event.preventDefault();
  
    // Using this template, need to grab the user input values from the application section of newApp
    const company_name = document.querySelector("#inputCompany").value.trim();
    const job_url = document.querySelector("#jobURL").value.trim();
    const date_found = document.querySelector("#dateFound").value;
    const role = document.querySelector("#role").value.trim();
    const submission_date = document.querySelector("#dateApplied").value;
    const application_status = document.querySelector("#statusSel").value;
  
    if (company_name || job_url || date_found || role || submission_date) {
      const responseApp = await fetch("/", {
        method: "PUT",
        body: JSON.stringify({
          company_name,
          job_url,
          date_found,
          role,
          submission_date,
          application_status,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
          if (responseApp.ok) {
            document.location.replace("/editInt");
          } else {
            alert("Failed to edit application.");
          }
        }
  };
  
  document
    .querySelector(".editAppForm")
    .addEventListener("submit", newAppFormHandler);