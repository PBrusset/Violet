function getRequest(location, payload) {
    //Get requests
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + location, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(payload));
    return xhr;
}

function postRequest(location, payload) {
    //Post requests
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url + "/" + location, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(payload));
    return xhr;
}

// Payload and then sending it to the server
payload = {
    "id": id,
    "name": flname,
    "content": content
}
console.log(payload);

var xhr = postRequest("signup", payload)

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        //handle response
        var res = JSON.parse(xhr.response);
        if(res["signup"] == false){
            console.log("Signup Failed.")
        }
    }
}