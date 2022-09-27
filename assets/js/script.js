let currentDayEl = $('#currentDay');

function currentDay() {
    let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    currentDayEl.text(today)
};

$(document).ready(currentDay());