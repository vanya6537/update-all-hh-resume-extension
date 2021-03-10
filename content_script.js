const fourHours = 4 * 60 * 60 * 1000;

function raiseAllResume() {
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

raiseAllResume();

setTimeout(
  () => chrome.runtime.sendMessage({ reloadAndRepeat: true }),
  fourHours
);
