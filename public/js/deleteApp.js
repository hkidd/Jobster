// Delete the clicked app along with the attached interviews and tests
const handleAppDelete = async (event) => {
        event.preventDefault();

    const applicationId = document.querySelector("#delete").value;

    if (applicationId) {
        const responseApp = await fetch(`/${applicationId}`, {
          method: "DELETE",
        //   body: JSON.stringify({
        //     applicationId: applicationId,
        //   }),
          headers: { "Content-Type": "application/json" },
        });
        if (responseApp.ok) {
            document.location.replace("/");
          } else {
            alert("Failed to delete application.");
          }
        }
};

let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", handleAppDelete);