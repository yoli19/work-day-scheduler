var getCurrentDate = function () {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
};

getCurrentDate();