let scr= document.querySelector(`.screen`)

let inc = document.querySelector(`#inc`),
    rst = document.querySelector(`#rst`),
    dec = document.querySelector(`#dec`),
    rnd = document.querySelector(`#rnd`),
    valueCount=0;
scr.innerText=valueCount
rst.addEventListener("click",function(){
    valueCount=0
    scr.innerText = valueCount
    inc.addEventListener("click",getInc)
    dec.addEventListener("click",getDec)

})
rnd.addEventListener("click",function(){
    valueCount = Math.floor(Math.random()*50)*(-1)**Math.floor(Math.random()*50)
    scr.innerText = valueCount
})



inc.addEventListener("click",getInc)
function getInc(){
    valueCount++
    scr.innerHTML = valueCount
    console.log(scr.innerHTML)

    if(valueCount===50){
        inc.removeEventListener("click",getInc)
        // valueCount--
    }
}

dec.addEventListener("click",getDec) 
   
function getDec(){
    valueCount--
    scr.innerHTML = valueCount
    console.log(scr.innerHTML)
    if(valueCount===-50){
        dec.removeEventListener("click",getDec)
        // valueCount++
    }
}