`use strict`
let btnBlog = document.querySelector(`.tab_item`);
let btn = document.querySelectorAll(`.tab_paragraph`)
let tabBlog = document.querySelectorAll(`.reason`)
let timeItem = document.querySelectorAll(`.timer`)
let x=0



btnBlog.addEventListener(`click`,(e)=>{
    if(e.target.classList.contains(`tab_paragraph`)){
        console.log(12)
        for(let i=0;i<4;i++){
            btn[i].classList.remove(`active_tab-item`)
            tabBlog[i].classList.remove(`active`)
            if(btn[i]==e.target){
                console.log(9999)
                x=i
            }
        }
        e.target.classList.add(`active_tab-item`)
        tabBlog[x].classList.add(`active`)
    }

})












setInterval(showTime,1000)


function innerDate(deadline) {
    let obj = getData(deadline);
    timeItem[0].innerText=checkIt(obj.day)
    timeItem[1].innerText=checkIt(obj.hour)
    timeItem[2].innerText=checkIt(obj.minute)
    timeItem[3].innerText=checkIt(obj.second)
}


function getData(deadline) {
    let day,hour,minute,second,res;
        res=Date.parse(deadline)-new Date()
        day=Math.floor(Math.floor(res/1000/60/60/24))
        hour=Math.floor((res/1000/60/60))%24
        minute=Math.floor((res/1000/60))%60
        second=Math.floor((res/1000))%60

    return {
        res,
        day,
        hour,
        minute,
        second
    }
}
function checkIt(num) {
    if(num<10) return `0${num}`
    else return num
}
function showTime(){
    innerDate(`2023-04-10`)
}
