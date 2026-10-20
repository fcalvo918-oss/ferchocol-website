(() => {
  const messages = {
    "project-inquiry": "Thank you. Your inquiry has been received. Ferchocol Software will review the information and respond if the project appears to be a potential fit. Submission does not create a client relationship or guarantee project acceptance.",
    "fabellume-beta": "Thank you. Your Fabellume beta application has been received. Ferchocol Software will review the application. Submitting an application does not guarantee selection or access."
  };

  document.querySelectorAll("[data-enhanced-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector('button[type="submit"]');
    let processing = false;

    const show = (message, state = "") => {
      if (!status) return;
      status.textContent = message;
      status.dataset.state = state;
      status.focus({ preventScroll: true });
    };

    form.addEventListener("invalid", (event) => {
      const field = event.target;
      let message = "Please complete the required information before submitting.";
      if (field.validity.typeMismatch && field.type === "email") message = "Please enter a valid email address.";
      if (field.validity.typeMismatch && field.type === "url") message = "Please enter a complete URL, including https://, or leave that optional field blank.";
      show(message, "error");
    }, true);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (processing) return;
      if (!form.reportValidity()) return;
      processing = true;
      submit.disabled = true;
      submit.setAttribute("aria-disabled", "true");
      show("Submitting…");
      try {
        const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        show(messages[form.dataset.formKind] || "Thank you. Your submission has been received.", "success");
      } catch (error) {
        show("We could not submit the form. Please check your connection and try again. If the problem continues, contact hello@ferchocol.com.", "error");
      } finally {
        processing = false;
        submit.disabled = false;
        submit.removeAttribute("aria-disabled");
      }
    });
  });
})();
