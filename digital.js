setInterval(showTime)
function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    if (hour<10){
        hour="0" + hour 
    }
    if (min<10){
        min="0" + min
    }
    if (sec<10){
        sec="0" + sec
    }
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}
showTime();
