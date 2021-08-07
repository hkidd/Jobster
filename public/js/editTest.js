const handleTestEdit = async (event) => {
  event.preventDefault();

  const testId = document.querySelector("#submitTest").value;
  console.log(testId);

  const test_date = document.querySelector("#testDate").value;
  const concepts = document.querySelector("#conceptsTested").value.trim();
  const passed = document.querySelector("#passed").value.trim();

  console.log(test_date);
  console.log(concepts);
  console.log(passed);

  if (test_date || concepts || passed) {
    const responseApp = await fetch(
      `/api/interview-routes/editIntInfo/${testId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          passed: passed,
          concepts: concepts,
          passed: passed,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (responseApp.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to edit test.");
    }
  }
};

document.querySelector("#submitTest").addEventListener("click", handleTestEdit);