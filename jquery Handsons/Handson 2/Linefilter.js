
$(document).ready(function () {
    $("#search").click(function () {

        var user_input = $("#text1").val();
        var words = user_input.split(",");
        var ans = "";
        var paragraph = $("#text2").val();
        var lines = paragraph.split("\n");

        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < words.length; j++) {
                if (lines[i].includes(words[j])) {
                    var first = "";
                    var second = "";
                    var sp = lines[i].split(words[j]);
                    first = sp[0];
                    second = sp[1];
                    ans += first + "<b>" + words[j] + "</b>" + second + ",";
                }
            }
        }
        var new_ans = ans.slice(0, -1);
        $("#text3").val(new_ans);
    })
});