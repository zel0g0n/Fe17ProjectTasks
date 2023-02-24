const slider = document.querySelector(`.slider_elements`),
      slideMember = document.querySelectorAll(`.slide_member`),
      btn = document.querySelectorAll(`.btn`),
      counterBlog = document.querySelectorAll(`.counter span`);
let counter=0;
btn[1].addEventListener(`click`,(e)=>{
    counter++
    if(counter==slideMember.length) {
        counter=0
    }
    counterBlog[0].textContent=`0${counter+1}`

    slider.style.cssText=`transform: translateX(-${600*counter}px)`


})
btn[0].addEventListener(`click`,(e)=>{
    counter--
    if(counter<0) {

        counter=slideMember.length-1
    }
    counterBlog[0].textContent=`0${counter+1}`

    slider.style.cssText=`transform: translateX(-${600*counter}px)`


})