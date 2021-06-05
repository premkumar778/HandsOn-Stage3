$(document).ready(function () {
    $("#btn").click(function () {
        if ($("#task").val() == "") {
            alert("Enter task details!!");
        }
        else {
            document.getElementById("p1").innerHTML += $("#task").val() + "<br>";
        }
    });

});