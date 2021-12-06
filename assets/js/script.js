/* WHEN I open the planner THEN the current day is displayed at the top of the calendar */

var currentDay = luxon.DateTime.now().toFormat("MMMM dd, yyyy, h:mm:ss a")
$("#currentDay").text(currentDay);

/* 
WHEN I scroll down THEN I am presented with time blocks for standard business hours
Based on timeblocks added to html file */

var block9am = $("#9am").text();
var block10am = $("#10am").text();
var block11am = $("#11am").text();
var block12pm = $("#12pm").text();
var block1pm = $("#1pm").text();
var block2pm = $("#2pm").text();
var block3pm = $("#3pm").text();
var block4pm = $("#4pm").text();
var block5pm = $("#5pm").text();

/* 
WHEN I click on a time block THEN I can enter an event
WHEN I click the save button for that time block THEN the text for that event is saved in local storage
WHEN I refresh the page THEN the saved events persist */

$('#btn9am').on('click', function () {
    // Determine if text box is empty so user can enter event
    if ($('#text9am').val()) {
    // Clear local storage if text box is empty
        localStorage.removeItem('text9am');
    }

    // new var for timeblock that matches the event entry for said block
        var hour9am = JSON.stringify(block9am);

    // event is saved to local storage
        localStorage.setItem(block9am, $('#text9am').val());
});
   
    // REPEAT FOR EACH BUSINESS HOUR 10am-5pm
    // Note to self - need to go back and look for DRY methods

$('#btn10am').on('click', function () {
    if ($('#text10am').val()) {
        localStorage.removeItem('text10am');
    }
        var hour10am = JSON.stringify(block10am);
        localStorage.setItem(block10am, $('#text10am').val());
});

$('#btn11am').on('click', function () {
    if ($('#text11am').val()) {
        localStorage.removeItem('text11am');
    }
        var hour11am = JSON.stringify(block11am);
        localStorage.setItem(block11am, $('#text11am').val());
});

$('#btn12pm').on('click', function () {
    if ($('#text12pm').val()) {
        localStorage.removeItem('text12pm');
    }
            
        var hour12pm = JSON.stringify(block12pm);
        localStorage.setItem(block12pm, $('#text12pm').val());
});

$('#btn1pm').on('click', function () {
    if ($('#text1pm').val()) {
        localStorage.removeItem('text1pm');
    }
                
        var hour1pm = JSON.stringify(block1pm);
        localStorage.setItem(block1pm, $('#text1pm').val());
});

$('#btn2pm').on('click', function () {
        if ($('#text2pm').val()) {
            localStorage.removeItem('text2pm');
        }
            var hour2pm = JSON.stringify(block2pm);
            localStorage.setItem(block2pm, $('#text2pm').val());
});

$('#btn3pm').on('click', function () {
        if ($('#text3pm').val()) {
            localStorage.removeItem('text3pm');
        }
            var hour3pm = JSON.stringify(block1pm);
            localStorage.setItem(block3pm, $('#text3pm').val());
});

$('#btn4pm').on('click', function () {
        if ($('#text4pm').val()) {
            localStorage.removeItem('text4pm');
        }
            var hour4pm = JSON.stringify(block4pm);
            localStorage.setItem(block4pm, $('#text4pm').val());
});

$('#btn5pm').on('click', function () {
        if ($('#text5pm').val()) {
            localStorage.removeItem('text5pm');
        }
            var hour5pm = JSON.stringify(block5pm);
            localStorage.setItem(block5pm, $('#text5pm').val());
});

/* 
WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future */

var timeBlock = $(".hour");
var currentTime = parseInt(luxon.DateTime.now().toFormat("H"));

$.each(timeBlock, function (i, hour) {
    var blockId = parseInt($(this).attr("id"));
    if (blockId === currentTime) {
      $(this).next().addClass("present");
    } else if (blockId < currentTime) {
      $(this).next().addClass("past");
    } else if (blockId > currentTime) {
      $(this).next().addClass("future");
    }
  });