document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    
    if (firstName && lastName && password.length >= 8) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            password: password
        };
        console.log(formData);
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});
