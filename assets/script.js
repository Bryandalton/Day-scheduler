var dateEl = $("#date");
var timeEl = $("#time");
var inputText = $(".input-text");
var present = moment().hours();
var scheduleTime = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var scheduleItem = $(".schedule-item");
var saveBtn = $(".save");
var scheduleText = $(".schedule-text");

dateEl.text(moment().format("dddd, MMMM YYYY"));
function displayTime() {
  var now = moment().format("h:mm:ss a");
  timeEl.text(now);
}
setInterval(displayTime, 1000);

function updateColor() {
  for (let i = 0; i < scheduleTime.length; i++) {
    if (present == scheduleTime[i]) {
      scheduleItem.eq(i).removeClass("past");
      scheduleItem.eq(i).addClass("present");
      scheduleItem.eq(i).removeClass("future");
    } else if (present > scheduleTime[i]) {
      scheduleItem.eq(i).addClass("past");
      scheduleItem.eq(i).removeClass("present");
      scheduleItem.eq(i).removeClass("future");
    } else if (present < scheduleTime[i]) {
      scheduleItem.eq(i).addClass("future");
      scheduleItem.eq(i).removeClass("past");
      scheduleItem.eq(i).removeClass("present");
    }
  }
}
//calls color code and checks for updates every minute
updateColor();
setInterval(updateColor, 60000);

function saveEvent(listIndex) {
  var savedEvent = inputText.eq(listIndex).val().trim();
  var saveConfirm = $("#confirm-save");
  var savedItem = $("<p>");
  var localStorageKey = "event#" + listIndex;
  saveConfirm.text("Save Confrimed!");
  scheduleItem.eq(listIndex).append(savedItem);
  localStorage.setItem(localStorageKey, savedEvent);
  savedItem.text(localStorage.getItem(localStorageKey));
}

saveBtn.each((index, btn) => {
  btn.addEventListener("click", () => saveEvent(index));
});

scheduleText.each((index, text) => {
  var localStorageKey = "event#" + index;
  text.innerText = localStorage.getItem(localStorageKey);
});
