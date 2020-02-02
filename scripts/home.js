window.onload = function () {
    init();
};

function init(){
    checkUser();
}

function checkUser(){
    let user = JSON.parse(getCookie('user'));

    let header = document.getElementById("header");
    if(user){
        let i = document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-user");
        header.append(i);

        i.onclick = () => redirect("user.html");

        let logout = document.createElement("button");
        logout.innerHTML = "Sign Out";
        logout.classList.add("sign-in");
        logout.id = "logout";
        header.append(logout);

        logout.onclick = onLogout;
    }
    else{
        let login = document.createElement("button");
        login.innerHTML = "Sign In";
        login.classList.add("sign-in");
        login.id = "login";
        header.append(login);

        login.onclick = () => redirect("login.html");
    }
}