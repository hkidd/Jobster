const editTestFormHandler = async (event) => {
  event.preventDefault();

  // Using this template, need to grab the user input values from the test section of newApp
  const test_date = document.querySelector("#testDate").value;
  const concepts = document.querySelector("#conceptsTested").value.trim();
  const passed = document.querySelector("#passed").value.trim();

  console.log(test_date);
  console.log(concepts);
  console.log(passed);

  if (test_date || concepts || passed) {
    const responseTest = await fetch("/api/test-routes/test", {
      method: "PUT",
      body: JSON.stringify({ test_date, concepts, passed }),
      headers: { "Content-Type": "application/json" },
    });

    if (responseTest.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to edit test.");
    }
  }
};

document
  .querySelector(".editTestForm")
  .addEventListener("submit", editTestFormHandler);
