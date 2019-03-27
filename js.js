
var greetings = document.getElementById("greetings");
var time = new Date();
var h = time.getHours();
if (h >= 19 && h <= 21) {
    greetings.innerHTML = "Good evening :)";
}
else if (h > 9 && h <= 12) {
    greetings.innerHTML = "Good morning :)";
}
else {
    greetings.innerHTML = "Good afternoon :)";
}

function alertQQ() {
    alert("Add me in QQ: 1052288068");
}

//document.getElementsByClassName('qq').addEventListener('click', alertQQ()); <-- this or:

//document.getElementsByClassName('qq').addEventListener('click', (() => { alert('add me in qq: xxxxxxxxx') }) )