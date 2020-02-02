window.onload = function () {
    init();
};

function init() {
    let form = document.getElementById("login-form");
    form.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
    event.preventDefault();

    let form = document.getElementById("login-form");

    let email = form.email.value;
    let password = form.password.value;

    let emailerror = document.getElementById("emailerror");
    let passworderror = document.getElementById("passworderror");

    let emailRGX = /[^@]+@[^\.]+\..+/g;

    let hasError = false;

    //Email
    if (!email) {
        emailerror.innerText = "This field is required";
        form.email.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        emailerror.innerText = "";
        hasError = false;
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

    //Password
    if (!password) {
        passworderror.innerText = "This field is required";
        form.password.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    } else {
        passworderror.innerText = "";
        form.password.parentNode.style.borderBottom = "none";
        hasError = false;
    }

    if (!hasError) {
        request("https://gist.githubusercontent.com/AcidRogue/4d634d4f4e9d788233f0f05d50ddaaed/raw/20c34a478f377c4b2d926ea8cd7662a5f9059a18/fmiflix_users.txt", handleData);
    }
}

function handleData(resp) {
    let errDiv = document.getElementById("login-form-wrong-login");

    if (resp) {
        let users = JSON.parse(resp);

        if(users.hasOwnProperty(email.value)){
            if(password.value === users[email.value].password){
                errDiv.innerText = "";
                window.location.replace("home.html");
                setCookie('user', users[email.value]);
            }
            else{
                errDiv.innerText = "Wrong username or password!";
            }
        }
        else{
            errDiv.innerText = "Wrong username or password!";
        }
    } else {
        errDiv.innerText = "Server problem!";
    }
}