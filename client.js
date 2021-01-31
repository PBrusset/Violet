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

function submit_by_id(){
    document.getElementById("form_id").submit();
    console.log("look at that");
    var flname = document.getElementById("flname").value;
    var content = document.getElementById('content').value;
}

// var flname = document.getElementById("flname").value;
// var content = document.getElementById('content').value;
console.log(flname);
console.log(content);

// Payload and then sending it to the server
payload = {
    "name": flname,
    "content": content
}
console.log(payload);

// var xhr = postRequest("forum", payload)

// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         //handle response
//         var res = JSON.parse(xhr.response);
//         if(res["forum"] == false){
//             console.log("Failed.")
//         }
//     }
// }