window.onload = function () {
    init();
    document.getElementById("mute").onclick = handleMute;
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

function handleMute() {
    let audio = document.getElementById('troy-video');
    let muteButton = document.getElementById('mute-button');

    if (audio.muted) {
        audio.muted = false;
        toggleBetweenClasses(muteButton, "fa-volume-off", "fa-volume-up");
    } else {
        audio.muted = true;
        toggleBetweenClasses(muteButton, "fa-volume-up", "fa-volume-off");
    }
}

function toggleBetweenClasses(el, c1, c2) {
    el.classList.toggle(c1);
    el.classList.toggle(c2);
}