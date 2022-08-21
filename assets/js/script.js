var getCurrentDate = function () {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
};

var getRowColors = function () {
    var currentTime = moment().hour();
    $('.time-block').each(function () {
        var rowTime = parseInt($(this).attr("id"));
        if (rowTime < currentTime) {
            $(this).children(".description").addClass("past");
        } else if (rowTime === currentTime) {
            $(this).children(".description").addClass("present");
        } else {
            $(this).children(".description").addClass("future");
        }
    });
};

var saveTask = function () {
    $(".saveBtn").on("click", function () {
        var taskText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, taskText);
    });
};


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

getCurrentDate();
getRowColors();
saveTask();