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

const nameValidationCheck = () => {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;

    if(firstName.length === 0){
        errorsFound['firstName'] = 'Please enter a valid first name!'
    } else {
        errorsFound['firstName'] = ''
    }

    if(lastName.length === 0){
        errorsFound['lastName'] = 'Please  enter a valid last name!'
    } else {
        errorsFound['lastName'] = ''
    }
}

const emailValidationCheck = () => {
    const email = document.getElementById('#email').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
        errorsFound['email'] = 'Please do not leave the email field empty'
    } else if(emailRegex.test(email)){
        errorsFound['email'] = 'Please enter a valid email address'
    } else {
        errorsFound['email'] = ''
    }
}

const genderValidationCheck = () => {
    const selectedOption = document.querySelector('input[type="radio"][name="gender"]:checked')
    radioValidationCheckerFunction(selectedOption, 'gender')
}

const phoneValidationCheck = () => {
    const phoneNumber = document.querySelector('#phone')
    const phoneNumberPattern = phoneNumber.getAttribute('pattern')
    const patternRegex = new RegExp(`^${phoneNumberPattern}$`)
    const phoneNumberValue = phoneNumber.value

    if(phoneNumberValue.length === 0){
        errorsFound['phone'] = 'Please do not leave this field empty'
    } else if(patternRegex.test(phoneNumberValue)){
        errorsFound['phone'] = 'Please enter a valid phone number'
    } else {
        errorsFound['phone'] = ''
    }
}

const emergencyValidationCheck = () => {
    const emergencyContact = document.querySelector('#emergency').value
    
    if(emergencyContact.length === 0){
        errorsFound['emergency'] = 'Please do not leave this field empty'
    } else {
        errorsFound['emergency'] = ''
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
    emailValidationCheck 
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


