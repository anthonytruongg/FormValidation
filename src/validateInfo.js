function validateInfo()
{
    const form = document.querySelector("form");
    const email = document.getElementById('email')
    const emailError = document.querySelector('#email + span.error');

    email.addEventListener("input", (event) => {
        if (email.validity.valid) {
            emailError.textContent = ''; // Reset the content of the message
            emailError.className = 'error'; // Reset the visual state of the message
        } else {
            showError();
        }
    });
   
    form.addEventListener("submit", (event) => {
        if (!email.validity.valid) {
            showError();
            event.preventDefault();
        }
    });

    console.log("validateInfo ran!");
}

function showError() {
    if (email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    // Set the styling appropriately
    emailError.className = 'error active';
}


export default validateInfo;
