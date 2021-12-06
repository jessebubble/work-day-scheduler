// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = luxon.DateTime.now().toFormat("MMMM dd, yyyy, h:mm:ss a")
$("#currentDay").text(currentDay);


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

var hour9am = $("#9am").text();
var hour10am = $("#10am").text();
var hour11am = $("#11am").text();
var hour12pm = $("#12pm").text();
var hour1pm = $("#1pm").text();
var hour2pm = $("#2pm").text();
var hour3pm = $("#3pm").text();
var hour4pm = $("#4pm").text();
var hour5pm = $("#5pm").text();




// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future




// WHEN I click into a time block
// THEN I can enter an event



// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage



// WHEN I refresh the page
// THEN the saved events persist

