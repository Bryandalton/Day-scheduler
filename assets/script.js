var dateEl = $('#date')
var timeEl = $('#time')
var present = moment().hours();
var scheduleTime = [8,9,10,11,12,13,14,15,26,17,18,19,20]
var scheduleItem = $('.schedule-item')

dateEl.text(moment().format('dddd MMMM YYYY'))
// timeEl.text(moment().format('h:mm:ss a'))
function displayTime () {
  var now = moment().format('h:mm:ss a')
  timeEl.text(now)
}
setInterval(displayTime, 1000)

$( function() {
    $( "#sortable" ).sortable();
  } );

  $( function () {

  })


console.log(present)
console.log(scheduleTime[0])
console.log(scheduleTime[1])

console.log(scheduleItem)

for (let i = 0; i > scheduleTime.length; i++) {
  scheduleTime[i] = scheduleItem

  if (present == scheduleTime[i]) {
    scheduleItem.addClass('present')
    scheduleItem.removeClass('past')
    scheduleItem.removeClass('future')
   } else if (present > scheduleTime[i]) {
    scheduleItem.addClass('past')
    scheduleItem.removeClass('present')
    scheduleItem.removeClass('future')
   } else if (present < scheduleTime[i]) {
    scheduleItem.addClass('future')
    scheduleItem.removeClass('past')
    scheduleItem.removeClass('present')
  }
}
