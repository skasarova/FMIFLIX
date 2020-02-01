window.onload = function() {
    init();
};

function init(){
    document.getElementById("login").onclick = handleLogin;
}

function handleLogin(){
    let form = document.getElementById("login-form");

    let email = form.email.value;
    let password = form.password.value;

    let emailerror = document.getElementById("emailerror");
    let passworderror = document.getElementById("passworderror");

    let emailRGX = /[^@]+@[^\.]+\..+/g;

    let hasError = false;

    //Email
    if(!email){
        emailerror.innerText = "This field is required";
        form.email.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    }
    else{
        emailerror.innerText = "";
        hasError = false;
        if(!emailRGX.test(email)){
            emailerror.innerText = "Please enter a valid email";
            form.email.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
            hasError = true;
        }
        else{
            emailerror.innerText = "";
            form.email.parentNode.style.borderBottom = "none";
            hasError = false;
        }
    }

    //Password
    if(!password){
        passworderror.innerText = "This field is required";
        form.password.parentNode.style.borderBottom = "1px solid rgba(255, 130, 0, 0.91)";
        hasError = true;
    }
    else{
        passworderror.innerText = "";
        form.password.parentNode.style.borderBottom = "none";
        hasError = false;
    }

    if(hasError){
        return false;
    }
    else{
        request('C://Users/Kalin/Desktop/FMIFLIX/Users.js', handleLogin)
    }
}

function handleLogin(response){
    console.log("RESPONSE");
    console.log(response);
}