// This function displays current date and time 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

// This funtion is the save button and input 
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      var value = $(this).siblings(".input").val();
      var time = $(this).parent().attr("id");
  
 // This funtion will save input to local storage 
    localStorage.setItem(time, value);
    });

 // This should reload saved localstorage 
    $("#hour-09 .input").val(localStorage.getItem("hour-09"));
    $("#hour-10 .input").val(localStorage.getItem("hour-10"));
    $("#hour-11 .input").val(localStorage.getItem("hour-11"));
    $("#hour-12 .input").val(localStorage.getItem("hour-12"));
    $("#hour-13 .input").val(localStorage.getItem("hour-13"));
    $("#hour-14 .input").val(localStorage.getItem("hour-14"));
    $("#hour-15 .input").val(localStorage.getItem("hour-15"));
    $("#hour-16 .input").val(localStorage.getItem("hour-16"));
    $("#hour-17 .input").val(localStorage.getItem("hour-17"));

// This shows the current hour 
function hourUpdater() {
    var currentHour = moment().hours();

// This is the time block loop 
  $(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);

  if (blockHour < currentHour) {
      $(this).addClass("past");

      } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();
});
