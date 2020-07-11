var min = 0
var sec = 0
var msc = 0
var first = document.getElementById('zeroone')
var second = document.getElementById('zerotwo')
var third = document.getElementById('zerothree')
var interval;

function timer(){
    msc++
    third.innerHTML = msc

    if(msc >= 100){
        sec++
        second.innerHTML = sec
        msc = 0
    }
    else if(sec >= 60){
        min++
        first.innerHTML = min
        sec = 0
    }
}
function start(){
    interval = setInterval(timer,10)
    var get = document.getElementById("disable123")
    get.disabled = true
}
function stop(){
    clearInterval(interval)
    var get = document.getElementById("disable123")
    get.disabled = false

}
function reset(){
    min = 0
    sec = 0
    msc = 0
    first.innerHTML = min
    second.innerHTML = sec
    third.innerHTML = msc
    stop()
}