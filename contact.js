document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch((error) => alert("Oops! Something went wrong."));
  });
});
