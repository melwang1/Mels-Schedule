// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
  $("#currentDay").text(today.format('MMM D, YYYY'));

  var eventTime = document.getElementById("hour");
  var eventText = document.querySelector("description");
  var saveBtn = document.querySelector("save");


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $(".saveBtn").on("click", function () {
  var eventText = $(this).siblings(".description").val();
  var eventTime = $(this).parent().attr("id");
  localStorage.setItem(eventTime, eventText);

});

$("#hour-9.description").val(localStorage.getItem("hour-9"));
$("#hour-10.description").val(localStorage.getItem("hour-10"));
$("#hour-11.description").val(localStorage.getItem("hour-11"));
$("#hour-12.description").val(localStorage.getItem("hour-12"));
$("#hour-13.description").val(localStorage.getItem("hour-13"));
$("#hour-14.description").val(localStorage.getItem("hour-14"));
$("#hour-15.description").val(localStorage.getItem("hour-15"));
$("#hour-16.description").val(localStorage.getItem("hour-16"));
$("#hour-17.description").val(localStorage.getItem("hour-17"));
//$(".description.text").val(localStorage.getItem("description"));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
function colorCode () {
  var currentTime = moment().hours();

  $(".time-block").each(function() {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    var
    if (timeBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (timeBlock === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");    
   }
  })
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


