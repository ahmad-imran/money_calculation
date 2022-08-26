//s-1 submit button event handler
document.getElementById('btn-submit').addEventListener('click', function () {
    //s-2 get email address input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //s-3 get pass
    const passField = document.getElementById('user-password');
    const password = passField.value;
    //s4 verify email and password
    if (email === 'caveman@gmail.com' && password === '142766') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Fraud');
    }

})