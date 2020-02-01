window.onload = function () {
    init();
};

function init() {
    document.getElementById("register").onclick = handleRegister;
}

function handleRegister() {
    let form = document.getElementById("register-form");

    let firstname = form.firstname.value;
    let lastname = form.lastname.value;
    let email = form.email.value;
    let password1 = form.password1.value;
    let password2 = form.password2.value;

    let firstnameerror = document.getElementById("firstnameerror");
    let lastnameerror = document.getElementById("lastnameerror");
    let emailerror = document.getElementById("emailerror");
    let password1error = document.getElementById("password1error");
    let password2error = document.getElementById("password2error");

    let emailRGX = /[^@]+@[^\.]+\..+/g;

    let hasError = false;

    //First Name
    if (!firstname) {
        firstnameerror.innerText = "This field is required";
        form.firstname.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        firstnameerror.innerText = "";
        form.firstname.parentNode.style.borderBottom = "none";
        hasError = false;
    }

    //Last Name
    if (!lastname) {
        lastnameerror.innerText = "This field is required";
        form.lastname.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        lastnameerror.innerText = "";
        form.lastname.parentNode.style.borderBottom = "none";
        hasError = false;
    }

    //Email
    if (!email) {
        emailerror.innerText = "This field is required";
        form.email.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        if (!emailRGX.test(email)) {
            emailerror.innerText = "Please enter a valid email";
            form.email.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
            hasError = true;
        } else {
            emailerror.innerText = "";
            form.email.parentNode.style.borderBottom = "none";
            hasError = false;
        }
    }

    //Passwords
    if (!password1 || password1.length < 8) {
        password1error.innerText = "Password should be at least 8 characters long";
        form.password1.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        password1error.innerText = "";
        form.password1.parentNode.style.borderBottom = "none";
        hasError = false;
        if (!password2) {
            password2error.innerText = "This field is required";
            form.password2.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
            hasError = true;
        } else {
            if (password1 !== password2) {
                password2error.innerText = "Passwords should match";
                form.password2.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
                hasError = true;
            } else {
                password2error.innerText = "";
                form.password2.parentNode.style.borderBottom = "none";
                hasError = false;
            }
        }
    }

    return false;
    return !hasError;
}