const form = document.querySelector('.form')
const btn = document.querySelector('#submissionBtn')
const errorsFound = {}

const radioValidationCheckerFunction = (option, inputName) => {
    if(!option){
        errorsFound[inputName] = 'Please select an option'
    } else {
        errorsFound[inputName] = ''
    }
}

const processErrorData = (tagElement, string, bool) => {
    if(bool){
        tagElement.hidden = false
        tagElement.textContent = string
        tagElement.setAttribute('aria-invalid', 'true');
    } else {
        tagElement.hidden = true
        tagElement.textContent = string
        tagElement.removeAttribute('aria-invalid');
    }
}

const nameValidationCheck = () => {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const errorTagFirstName = document.getElementById('firstName-length-error')
    const errorTagLastName = document.getElementById('lastName-length-error')

    if(firstName.length === 0){
        processErrorData(errorTagFirstName,'Please do not leave the first name field empty', true)
    } else {
        processErrorData(errorTagLastName, '', false)
    }

    if(lastName.length === 0){
        processErrorData(errorTagLastName, 'Please do not leave the last name field empty', true)   
    } else {
        processErrorData(errorTagLastName, '', false)
    }
}

const emailValidationCheck = () => {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTagEmail = document.getElementById('invalid-email');

    if (email.length === 0) {
        processErrorData(errorTagEmail, 'Please do not leave the email field empty', true)
    } else if(emailRegex.test(email)){
        processErrorData(errorTagEmail, 'Please enter a valid email address', true)
    } else {
        processErrorData(errorTagEmail, '', false)
    }
}

const genderValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="gender"]:checked')

    radioValidationCheckerFunction(selectedOption, 'gender')

}

const phoneValidationCheck = () => {
    const phoneNumber = document.getElementById('phone')
    const phoneNumberPattern = phoneNumber.getAttribute('pattern')
    const patternRegex = new RegExp(`^${phoneNumberPattern}$`)
    const phoneNumberValue = phoneNumber.value
    const errorTagPhoneNumber = document.getElementById('invalid-phone-number')

    if(phoneNumberValue.length === 0){
        processErrorData(errorTagPhoneNumber, 'Please do not leave the phone number field empty', true)
    } else if(patternRegex.test(phoneNumberValue)){
        processErrorData(errorTagPhoneNumber, 'Please enter a valid phone number', true)
    } else {
        processErrorData(errorTagPhoneNumber, '', false)
    }
}

const emergencyValidationCheck = () => {
    const emergencyContact = document.getElementById('emergency').value
    const errorTagEmergency = document.getElementById('error-emergency')

    if(emergencyContact.length === 0){
        processErrorData(errorTagEmergency, 'Please do not leave the emergency field empty', true)
    } else {
        processErrorData(errorTagEmergency, '', false)
    }
}

const parkingValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="parking"]:checked')
    radioValidationCheckerFunction(selectedOption, 'parking')
}

const preferenceValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="room-pref"]:checked')
    radioValidationCheckerFunction(selectedOption, 'room-pref')
}

const dietValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="diet"]:checked')
    radioValidationCheckerFunction(selectedOption, 'diet')
}

const activitiesValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="activities"]:checked')
    radioValidationCheckerFunction(selectedOption, 'activities')
}

const attendeesValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="attendees"]:checked')
    radioValidationCheckerFunction(selectedOption, 'attendees')
}

const handleValidationSubmission = () => {
    nameValidationCheck()
    genderValidationCheck()
    emailValidationCheck()
    phoneValidationCheck()
    emergencyValidationCheck()
    parkingValidationCheck()
    preferenceValidationCheck()
    dietValidationCheck()
    activitiesValidationCheck()
    attendeesValidationCheck()
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleValidationSubmission()
    
    console.log(errorsFound)

})


