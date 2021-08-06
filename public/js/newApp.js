// We most likely need a front end js file that will run 3 routes (Application, Interview, and Test), after collecting the user input from the newApp handlebar page

const newAppFormHandler = async (event) => {
  event.preventDefault();

  // Using this template, need to grab the user input values from the application section of newApp
  const company_name = document.querySelector("#inputCompany").value.trim();
  const job_url = document.querySelector("#jobURL").value.trim();
  const date_found = document.querySelector("#dateFound").value;
  const role = document.querySelector("#role").value.trim();
  const submission_date = document.querySelector("#dateApplied").value;
  const application_status = document.querySelector("#statusSel").value;
  const research_company = document.querySelector("#researchCompany").checked;
  const follow_up_email = document.querySelector("#sendFollowUp").checked;

  if (company_name || job_url || date_found || role || submission_date || research_company || follow_up_email) {
    const responseApp = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        company_name,
        job_url,
        date_found,
        role,
        submission_date,
        application_status,
        research_company,
        follow_up_email
      }),
      headers: { "Content-Type": "application/json" },
    });

        if (responseApp.ok) {
          document.location.replace("/newInt");
        } else {
          alert("Failed to add new application.");
        }
      }
};

document
  .querySelector(".newAppForm")
  .addEventListener("submit", newAppFormHandler);