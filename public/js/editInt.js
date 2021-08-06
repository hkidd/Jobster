const editIntFormHandler = async (event) => {
  event.preventDefault();

  // Using this template, need to grab the user input values from the interview section of newApp
  const interview_date = document.querySelector("#interviewDate").value;
  const thank_you_note_sent = document.querySelector("#sendThankYou").checked;
  const follow_up_email = document.querySelector("#sendFollowUp").checked;

  console.log(interview_date);
  console.log(thank_you_note_sent);
  console.log(follow_up_email);

  if (interview_date || thank_you_note_sent || follow_up_email) {
    const responseInt = await fetch("/api/interview-routes/interview/", {
      method: "PUT",
      body: JSON.stringify({
        interview_date,
        thank_you_note_sent,
        follow_up_email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (responseInt.ok) {
      document.location.replace("/editTest");
    } else {
      alert("Failed to edit interview.");
    }
  }
};

document
  .querySelector(".editIntForm")
  .addEventListener("submit", editIntFormHandler);

//   On edit button click handler   
        // populate the editApp/Int/Test handlebar page with that applications info
        //  
