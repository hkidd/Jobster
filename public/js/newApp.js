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

  if (company_name && job_url && date_found && role && submission_date) {
    const response = await fetch("/", {
      method: "POST",
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

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add new application.");
    }
  }

  // Using this template, need to grab the user input values from the interview section of newApp
//   const interview_date = document.querySelector("#interviewDate").value;
//   const thank_you_note_sent = document.querySelector("#sendThankYou").value;
//   const follow_up_email = document.querySelector("#sendFollowUp").value;

//   console.log(interview_date);
//   console.log(thank_you_note_sent);
//   console.log(follow_up_email);

//   if (interview_date && thank_you_note_sent && follow_up_email) {
//     const response = await fetch("/api/users/interview/", {
//       method: "POST",
//       body: JSON.stringify({
//         interview_date,
//         thank_you_note_sent,
//         follow_up_email,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to add new interview.");
//     }
//   }

  // Using this template, need to grab the user input values from the application section of newApp
//   const testDate = document.querySelector("#testDate").value.trim();
//   const conceptsTested = document.querySelector("#conceptsTested").value.trim();
//   const passed = document.querySelector("#passed").value.trim();

//   console.log(testDate);
//   console.log(conceptsTested);
//   console.log(passed);

//   if (testDate && conceptsTested && passed) {
//     const response = await fetch("/api/users/test/", {
//       method: "POST",
//       body: JSON.stringify({ testDate, conceptsTested, passed }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to add new test.");
//     }
//   }
};

document
  .querySelector(".newAppForm")
  .addEventListener("submit", newAppFormHandler);
