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

$("#pic1").click(function () {
  $("#pic1").slideUp(2000).slideDown(2000);
});
$("form.foem").submit(function () {
  var name = $("input#name").val();
  var email = $("input#email").val();
  if ($("input#name").val() && $("input#email").val()) {
    alert(name + ", we have received your feedback.Thank you!.");
  }
  else {
    alert("Please enter your details!");
  }

});