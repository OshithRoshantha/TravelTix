document.querySelector('.switcher').addEventListener('click', function() {
    var fromInput = document.querySelector('.fromBar').value;
    var toInput = document.querySelector('.toBar').value;
    document.querySelector('.fromBar').value = toInput;
    document.querySelector('.toBar').value = fromInput;
});
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('currentTime').innerText = timeString;
}
setInterval(updateTime, 1000);