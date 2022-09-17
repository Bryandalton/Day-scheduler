var dateEl = $('#date')
var timeEl = $('#time')
var current = moment().hours();
var scheduleTime = [moment().hours('8, hours'), moment().hours('9') ]

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



  scheduleTime[0].diff(scheduleTime[1], 'hours')

  console.log(current)

  console.log(scheduleTime[0])
