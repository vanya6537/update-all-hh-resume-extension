// function insertAfter(referenceNode, newNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

function updateAllResume() {
    const buttonsToClick = document.querySelectorAll('button[data-qa="resume-update-button"]');
    if (buttonsToClick.length > 0) {
        buttonsToClick.forEach((button) => {
            try {
                button.click()
            } catch (err) {
                console.error(err);
            }
        });
    }
    // } else {
    //     let buttonMain = document.querySelector('button#cta')
    //     let textNotification = document.createElement('p')
    //     textNotification.innerHTML = 'No buttons found'
    //     insertAfter(buttonMain, textNotification);
    // }

}

updateAllResume();