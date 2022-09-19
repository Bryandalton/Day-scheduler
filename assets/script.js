var dateEl = $('#date');
var timeEl = $('#time');
var inputText = $('.input-text');
var present = moment().hours();
var scheduleTime = [8,9,10,11,12,13,14,15,16,17,18,19,20];
var scheduleItem = $('.schedule-item');
var saveBtn = $('.save');

dateEl.text(moment().format('dddd, MMMM YYYY'));
// timeEl.text(moment().format('h:mm:ss a'))
function displayTime () {
  var now = moment().format('h:mm:ss a')
  timeEl.text(now)
};
setInterval(displayTime, 1000);

function updateColor () {
  for (let i = 0; i < scheduleTime.length; i++) {

    if (present == scheduleTime[i]) {
      scheduleItem.eq(i).removeClass('past')
      scheduleItem.eq(i).addClass('present')
      scheduleItem.eq(i).removeClass('future')
     } else if (present > scheduleTime[i]) {
      scheduleItem.eq(i).addClass('past')
      scheduleItem.eq(i).removeClass('present')
      scheduleItem.eq(i).removeClass('future')
     } else if (present < scheduleTime[i]) {
      scheduleItem.eq(i).addClass('future')
      scheduleItem.eq(i).removeClass('past')
      scheduleItem.eq(i).removeClass('present')
    }
  }
};

setInterval(updateColor, 1000)

function saveEvent () {
  var savedEvent = inputText.val().trim();
  var saveConfirm = $('#confirm-save')
  saveConfirm.text('Save Confrimed!')
  localStorage.setItem('event',savedEvent)
};

saveBtn.on('click', saveEvent)

console.log(present)