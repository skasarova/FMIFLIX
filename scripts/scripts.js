function request(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload  = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            } else {
                callback(null);
            }
        }
    };
    xhr.open("GET", path);
    xhr.send();
}

function setCookie(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getCookie(key){
    return window.localStorage.getItem(key);
}
