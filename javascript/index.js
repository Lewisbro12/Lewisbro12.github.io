var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();

var date = d.getDate();
function thstndrd(n) {
    return [`${n}st`,`${n}nd`,`${n}rd`][(((n < 0 ? -n : n) + 90 ) % 100 - 10) % 10 - 1] || `${n}th`;
}
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = document.getElementById("date");
x.innerHTML = thstndrd(date) + " " + day + " " + month + " " + year;
