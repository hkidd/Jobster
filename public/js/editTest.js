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
    const responseTest = await fetch(
      `/api/test-routes/editTestInfo/${testId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          test_date: test_date,
          concepts: concepts,
          passed: passed,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (responseTest.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to edit test.");
    }
  }
};

document.querySelector("#submitTest").addEventListener("click", handleTestEdit);