const newIntFormHandler = async (event) => {
    event.preventDefault();

// Using this template, need to grab the user input values from the interview section of newApp
const interview_date = document.querySelector("#interviewDate").value;
const thank_you_note_sent = document.querySelector("#sendThankYou").value;
const follow_up_email = document.querySelector("#sendFollowUp").value;

console.log(interview_date);
console.log(thank_you_note_sent);
console.log(follow_up_email);

if (interview_date && thank_you_note_sent && follow_up_email) {
  const responseInt = await fetch("/api/users/interview/", {
    method: "POST",
    body: JSON.stringify({
      interview_date,
      thank_you_note_sent,
      follow_up_email,
    }),
    headers: { "Content-Type": "application/json" }
  });

      if (responseInt.ok) {
        document.location.replace("/newTest");
      } else {
        alert("Failed to add new interview.");
      }
    }
};

document
  .querySelector(".newIntForm")
  .addEventListener("submit", newIntFormHandler);