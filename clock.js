const clock = document.querySelector('.clock')
let minute = 0
let seconds = 0
let hour = 0
let sub_seconds = 0
let sub_minute = 0
let sub_hour = 0
localStorage.setItem('note', clock.innerHTML)
setInterval(() => {

    hour = new Date().getHours() % 12
    minute = new Date().getMinutes()
    seconds = new Date().getSeconds()
    if (seconds < 10) {
        sub_seconds = '0' + seconds.toString();
    } else {
        sub_seconds = seconds;
    }
    if(minute < 10){
        sub_minute ='0' + minute.toString()
    } else{
        sub_minute = minute;
    }
    if(hour <10){
        sub_hour = '0'+ hour.toString()
    } else {
        sub_hour = hour;
    }
    clock.innerText = sub_hour + ':' +sub_minute + ':' + sub_seconds
}, 1000)
