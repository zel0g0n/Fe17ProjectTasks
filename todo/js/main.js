let button = document.querySelector(`button`);
let block = document.querySelector(`.imagine`)
let modal = document.querySelector(`.modal`)
let modWin = document.querySelector(`.modal_wndw`)
let sendBtn = document.querySelector(`input[value='Send']`)
block.addEventListener(`click`,()=>{
    modal.style.display = `flex`
    document.body.style.cssText=`overflow-y:hidden`
})
modal.addEventListener(`click`,(e)=>{
    if(e.target.classList.contains(`modal`)) {
        modal.style.display=`none`
    }
})
sendBtn.addEventListener(`click`,()=>{
    modal.style.display=`none`
})
let input = document.querySelector(`.todoEnter`);
let todo = document.querySelector(`.todo`);
button.addEventListener(`click`,function() {
    if(input.value!=``){
        console.dir(input.value)
        todo.innerHTML += `
        <li>
            <span>
            <input type='checkbox' id='checkInput'>
            <span>${input.value}</span>
            </span>
            <span class='cross'>&#10539</span>
        </li>`
        let cross = document.querySelectorAll(`.cross`)
        cross.forEach(item => {
            item.addEventListener(`click`,function(){
            item.parentElement.remove()
            console.log(1212)
        })
        

        })
        input.value = ``
        input.style.border = `0`
        
    }else {
        input.style.cssText = `
            border: 1px red solid;
            `;
        
    }
})
