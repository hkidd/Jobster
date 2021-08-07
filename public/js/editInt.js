const handleIntEdit = async (event) => {
  event.preventDefault();

  const intId = document.querySelector("#submitInt").value;
  console.log(intId);

  const interview_date = document.querySelector("#interviewDate").value;
  const thank_you_note_sent = document.querySelector("#sendThankYou").checked;
  const follow_up_email = document.querySelector("#sendFollowUp").checked;

  if (interview_date || thank_you_note_sent || follow_up_email) {
    const responseApp = await fetch(`/api/interview-routes/editIntInfo/${intId}`, {
      method: "PUT",
      body: JSON.stringify({
        interview_date: interview_date,
        thank_you_note_sent: thank_you_note_sent,
        follow_up_email: follow_up_email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (responseApp.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to edit interview.");
    }
  }
};

document
  .querySelector("#submitInt")
  .addEventListener("click", handleIntEdit);