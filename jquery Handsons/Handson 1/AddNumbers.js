function add_two_number() {
    var a = $("#firstnumber").val();
    var b = $("#secondnumber").val();
    if (a == "" || b == "") {
        $("#failure").html("Pls.Enter the Values")
    }
    else {
        var result = parseInt(a) + parseInt(b);
        $("#result").val(result);
        $("#success").html(result);
    }

}