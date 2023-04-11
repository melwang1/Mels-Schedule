var today = dayjs();
$("#currentDay").text(today.format('MMM D, YYYY'));

var eventTime = document.getElementById("hour");
var eventText = document.querySelector("description");
var saveBtn = document.querySelector("save");

$(".saveBtn").on("click", function () {
  var eventText = $(this).siblings(".description").val();
  var eventTime = $(this).parent().attr("id");
  localStorage.setItem(eventTime, eventText);

});


function colorCode() {
  var currentTime = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlock1 = parseInt($(this).attr("id").split("-")[1]); // grabbing the numbers 11/12/13 grabbing military time - hours
    var timeBlockID = $(this).attr("id") // generated key for retrieving from localstorage
    var savedPlan = localStorage.getItem(timeBlockID) ///using the keyand retrieving from localstorage
    $(this).children("textarea").val(savedPlan) // assigning the value to the textarea
   // console.log("Saveplan", savedPlan, timeBlock1, currentTime)
    if (timeBlock1 > currentTime) {
      $(this).addClass("future");
    }
    else if (timeBlock1 == currentTime) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
}

colorCode();




