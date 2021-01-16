function updateAllResume() {
  // Select all buttons
  const buttonsToClick = document.querySelectorAll(
    'button[data-qa="resume-update-button"]'
  );

  // Click each of them
  buttonsToClick.forEach((button) => {
    try {
      button.click();
    } catch (err) {
      console.error(err);
    }
  });
}

// Every four hours from this moment execute the updateAllResume function
setInterval(updateAllResume, 4 * 60 * 60 * 1000);
// Execute function now
updateAllResume();
