var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
function thstndrd(n) {
    return ["st","nd","rd"][(((n < 0 ? -n : n) + 90 ) % 100 - 10) % 10 - 1] || "th";
}
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = document.getElementById("time");
var z = document.getElementById("date");
x.innerHTML = hr + ":" + min + ampm;
z.innerHTML = date + thstndrd(date) + " " + day + " " + month + " " + year;
