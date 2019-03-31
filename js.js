
/*var greetings = document.getElementById("greetings");
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
}*/

//document.getElementsByClassName('qq').addEventListener('click', alertQQ()); <-- this or:

//document.getElementsByClassName('qq').addEventListener('click', (() => { alert('add me in qq: xxxxxxxxx') }) )

$(document).ready(function () {
    //greetings
    var h = new Date().getHours();
    if (h >= 19 && h <= 21) {
        $("#greetings").text("Good evening");
    }
    if (h > 9 && h <= 12) {
        $("#greetings").text("Good morning");
    }
    else {
        $("#greetings").text("Good afternoon");
    }


    //qq
    $(".qq").on('click', function () {
        alert("Add me in qq: 1052288068")
    })


    //banners





    //About me 
    //comment section

    $("#add").on("click", function () {
        if (val !== "") {
            var val = $("input").val();
            var list = $("<li></li>").text(val);
            list.append("<span class='cancel'>X</span>");
            $("#commentlists").append(list);
            $("#commentarea").val("");

            var i;
            for (i = 0; i < cancelArray.length; i++) {

                cancel.on("click", function () {
                    var cancel = $(".cancel").eq[i];
                    alert("You sure you want to delete it?");
                    $(this).parent().remove();

                })
            }
        }

        })

        $(".head-nav-item").on("mouseover", function(){
            $(".submeanu").slideToggle(1000);
    
        })
















})

