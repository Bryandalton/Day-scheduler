var dateEl = $('#date')
var timeEl = $('#time')

dateEl.text(moment().format('dddd MMMM YYYY'))
timeEl.text(moment().format('h:mm:ss a'))

$( function() {
    $( "#sortable" ).sortable();
  } );

  $( function () {

  })