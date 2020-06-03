$(document).ready(function () {
  $("#appointmentForm").submit(function (event) {
    const name = $("input#name").val();
    const description = $("input#description").val();
    const date = $("input#date").val();
    // const date = parseInt($("input#dateInput").val());

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);


    $("#output").show();

    event.preventDefault();
  });
});
