var today = new Date();
var currentYear = today.getFullYear();
var newYear = new Date(currentYear, 11, 31);
if (today > newYear) {
  currentYear++;
  newYear = new Date(currentYear, 11, 31);
}
var timeDiff = newYear - today;
var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log("До нового года осталось " + daysLeft + " дней.");