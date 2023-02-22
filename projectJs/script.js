const button = document.querySelectorAll(`.buy_product`),
      basketBtn = document.querySelector(`.goto_basket`),
      foods = document.querySelectorAll(`.container`)
button.forEach((item)=>{
  item.addEventListener(`click`,(e)=>{
    console.log(e.target.parentElement)
    let n=e.target.parentElement
  })
})
basketBtn.addEventListener('click',()=>{
  document.querySelector(`.basket_blog`).style.cssText=`
  transform: translate(0);`
})
document.querySelector(`.btn_close-basket`).addEventListener('click',()=>{
  document.querySelector(`.basket_blog`).style.cssText=`
  transform: translateY(-100%);`
})
function getBasket() {
  button.forEach((item,index)=>{
    item.addEventListener(`click`,(e)=>{
      let cloneProduct=foods[index].cloneNode(true),
          clnBtn = cloneProduct.querySelector(`.buy_product`)
      clnBtn.remove()
      cloneProduct.style.cssText=`
       height: 270px;`
      document.querySelector(`.main_basket`).append(cloneProduct)

      
    })
  })

}
getBasket()

