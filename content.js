chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "AUTOFILL_FORM") {
    autofillForm();
  }
});

function autofillForm() {
  // Sample user data
  const data = {
    name: "Harsh Shukla",
    email: "harshshukla@example.com",
    phone: "9876543210",
    skills: "JavaScript, React, Node.js, MongoDB"
  };

  // Select standard inputs and textareas
  const fields = document.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    const identifier = (
      field.placeholder ||
      field.name ||
      field.id ||
      ""
    ).toLowerCase();

    if (identifier.includes("name")) {
      field.value = data.name;
    } else if (identifier.includes("email")) {
      field.value = data.email;
    } else if (identifier.includes("phone")) {
      field.value = data.phone;
    } else if (
      identifier.includes("skill") ||
      identifier.includes("experience")
    ) {
      field.value = data.skills;
    }

    // Trigger events for frameworks like React
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
  });
}
