const newTestFormHandler = async (event) => {
    event.preventDefault();

// Using this template, need to grab the user input values from the test section of newApp
const testDate = document.querySelector("#testDate").value;
const conceptsTested = document.querySelector("#conceptsTested").value.trim();
const passed = document.querySelector("#passed").value.trim();

console.log(testDate);
console.log(conceptsTested);
console.log(passed);

if (testDate || conceptsTested || passed) {
  const responseTest = await fetch("/api/test-routes/test/", {
    method: "POST",
    body: JSON.stringify({ testDate, conceptsTested, passed }),
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