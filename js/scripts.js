$(document).ready(function () {
  $("#appointmentForm").submit(function (event) {
    const name = $("input#name").val();
    const description = $("input#description").val();
    const date = $("input#date").val();
    // const date = parseInt($("input#dateInput").val());

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    // console.log(date);
    console.log(date.value); 


    $("#output").show();

    event.preventDefault();
  });
});
