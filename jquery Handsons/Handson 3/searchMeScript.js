$(document).ready(function () {
    $("p").css({ "font-size": 20, "width": 500, "color": "red", "margin": 5 });

    $("span").hover(function () {
        $(this).css({ "background-color": "bisque" });
        if ($(this).text().includes("th")) {
            $(this).css({ "font-style": "italic", "text-shadow": "2px 2px pink", "font-weight": "bolder" });
        }
    }, function () {
        $(this).css({ "font-style": "normal", "background-color": "white", "text-shadow": "0 0 white", "font-weight": "initial"});
    });

});