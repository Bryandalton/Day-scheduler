var dateEl = $('#date')
var timeEl = $('#time')

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