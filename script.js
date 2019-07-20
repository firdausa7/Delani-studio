$(document).ready(function () {
    $("div#d1").click(function () {
        $("#d1").hide();
        $("#p1").show();
    });
});
$("#p1").click(function () {
    $("#p1").hide();
    $("#d1").show();
});
$("div#d2").click(function () {
    $("#d2").hide();
    $("#p2").show();
});
$("#p2").click(function () {
    $("#p2").hide();
    $("#d2").show();
});
$("div#d3").click(function () {
    $("#d3").hide();
    $("#p3").show();
});
$("#p3").click(function () {
    $("#p3").hide();
    $("#d3").show();
});

// Get the logo, and when the user clicks on it, execute myFunction
//document.getElementById("#pic2").onclick = function() {myFunction()};
//$("#pic2").attr("href", "https://www.youtube.com/watch?v=S-Ui9wzcO5g");
