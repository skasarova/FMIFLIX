window.onload = function () {
    init();
};

function init(){
    checkUser();
}

function checkUser() {
    let user = JSON.parse(getCookie('user'));

    if(user){
        document.getElementById("email").innerText = user.email;

        document.getElementById("username").innerText = user.username;
        document.getElementById("firstname").innerText = user.firstname;
        document.getElementById("lastname").innerText = user.lastname;
        document.getElementById("password").innerText = user.password;
    }
    else{
        redirect("home.html")
    }
}
