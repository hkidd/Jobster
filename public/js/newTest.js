const newTestFormHandler = async (event) => {
    event.preventDefault();

// Using this template, need to grab the user input values from the test section of newApp
const test_date = document.querySelector("#testDate").value;
const concepts = document.querySelector("#conceptsTested").value.trim();
const passed = document.querySelector("#passed").value.trim();
const study_for_test = document.querySelector("#studyTest").checked;
const follow_up_email = document.querySelector("#sendFollowUp").checked;

console.log(test_date);
console.log(concepts);
console.log(passed);
console.log(study_for_test);
console.log(follow_up_email);

if (test_date || concepts || passed || study_for_test || follow_up_email) {
  const responseTest = await fetch("/api/test-routes/test", {
    method: "POST",
    body: JSON.stringify({ test_date, concepts, passed, study_for_test, follow_up_email }),
    headers: { "Content-Type": "application/json" },
  });

  if (responseTest.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add new application.");
  }
}
};

document
  .querySelector(".newTestForm")
  .addEventListener("submit", newTestFormHandler);