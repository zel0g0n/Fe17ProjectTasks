'use strict'
let date=document.querySelectorAll(`.time_item`)
function createDate(deadline) {
    let allMs=Date.parse(deadline)-new Date(),
        days=Math.floor(allMs/1000/60/60/24),
        hours=Math.floor(allMs/1000/60/60)%24,
        minutes=Math.floor(allMs/1000/60)%60,
        seconds=Math.floor(allMs/1000)%60
    return {
        allMs,
        days,
        hours,
        minutes,
        seconds
    }    
}
getDate(`2023-03-29`)
setInterval(setDate,1000)
function setDate() {
    getDate(`2023-03-29`)
}
function getDate(deadline) {
    let ged=createDate(deadline);
    date[0].innerText=ged.days
    date[1].innerText=ged.hours
    date[2].innerText=ged.minutes
    date[3].innerText=ged.seconds
}

