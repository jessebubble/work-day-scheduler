// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = luxon.DateTime.now().toFormat("MMMM dd, yyyy, h:mm:ss a")
$("#currentDay").text(currentDay);


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

var block9am = $("#9am").text();
var block10am = $("#10am").text();
var block11am = $("#11am").text();
var block12pm = $("#12pm").text();
var block1pm = $("#1pm").text();
var block2pm = $("#2pm").text();
var block3pm = $("#3pm").text();
var block4pm = $("#4pm").text();
var block5pm = $("#5pm").text();




// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future




// WHEN I click into a time block
// THEN I can enter an event



// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

    $('#btn9am').on('click', function () {
    // Determine if text box is empty
    if ($('#text9am').val()) {
        // Clear local storage if text box is empty
        localStorage.removeItem('text9am');
    }

    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
        var hour9am = JSON.stringify(block9am);

    // Store time and event data to the local storage
        localStorage.setItem(block9am, $('#text9am').val());
    });

    $('#btn10am').on('click', function () {
    // Determine if text box is empty
    if ($('#text10am').val()) {
        // Clear local storage if text box is empty
        localStorage.removeItem('text10am');
    }
    
    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
        var hour10am = JSON.stringify(block10am);
    
    // Store time and event data to the local storage
        localStorage.setItem(block10am, $('#text10am').val());
    });

    $('#btn11am').on('click', function () {
    // Determine if text box is empty
    if ($('#text11am').val()) {
        // Clear local storage if text box is empty
        localStorage.removeItem('text11am');
    }
        
    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
        var hour11am = JSON.stringify(block11am);
        
    // Store time and event data to the local storage
        localStorage.setItem(block11am, $('#text11am').val());
    });

    $('#btn12pm').on('click', function () {
    // Determine if text box is empty
    if ($('#text12pm').val()) {
    // Clear local storage if text box is empty
        localStorage.removeItem('text12pm');
    }
            
    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
        var hour12pm = JSON.stringify(block12pm);
            
    // Store time and event data to the local storage
        localStorage.setItem(block12pm, $('#text12pm').val());
    });

    $('#btn1pm').on('click', function () {
    // Determine if text box is empty
    if ($('#text1pm').val()) {
    // Clear local storage if text box is empty
        localStorage.removeItem('text1pm');
    }
                
    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
        var hour1pm = JSON.stringify(block1pm);
                
    // Store time and event data to the local storage
        localStorage.setItem(block1pm, $('#text1pm').val());
    });

    $('#btn2pm').on('click', function () {
        // Determine if text box is empty
        if ($('#text2pm').val()) {
        // Clear local storage if text box is empty
            localStorage.removeItem('text2pm');
        }
                    
        // Create a variable for the designated hour
        // That is equal to the time and event entry for that hour
            var hour2pm = JSON.stringify(block2pm);
                    
        // Store time and event data to the local storage
            localStorage.setItem(block2pm, $('#text2pm').val());
        });

    $('#btn3pm').on('click', function () {
        // Determine if text box is empty
        if ($('#text3pm').val()) {
        // Clear local storage if text box is empty
            localStorage.removeItem('text3pm');
        }
                        
        // Create a variable for the designated hour
        // That is equal to the time and event entry for that hour
            var hour3pm = JSON.stringify(block1pm);
                        
        // Store time and event data to the local storage
            localStorage.setItem(block3pm, $('#text3pm').val());
        });

    $('#btn4pm').on('click', function () {
        // Determine if text box is empty
        if ($('#text4pm').val()) {
        // Clear local storage if text box is empty
            localStorage.removeItem('text4pm');
        }
                            
        // Create a variable for the designated hour
        // That is equal to the time and event entry for that hour
            var hour4pm = JSON.stringify(block4pm);
                            
        // Store time and event data to the local storage
            localStorage.setItem(block4pm, $('#text4pm').val());
        });

    $('#btn5pm').on('click', function () {
        // Determine if text box is empty
        if ($('#text5pm').val()) {
        // Clear local storage if text box is empty
            localStorage.removeItem('text5pm');
        }
                                
        // Create a variable for the designated hour
        // That is equal to the time and event entry for that hour
            var hour5pm = JSON.stringify(block5pm);
                                
        // Store time and event data to the local storage
            localStorage.setItem(block5pm, $('#text5pm').val());
        });

                           
// WHEN I refresh the page
// THEN the saved events persist

