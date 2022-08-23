let plusBtns = document.querySelectorAll('.plus-btn')
console.log(plusBtns)
for(let i=0;i< plusBtns.length; i++){
    plusBtns[i].addEventListener('click', function(){
        plusBtns[i].previousElementSibling.value++
        totalPrice()
    })
}


let minusBtns = document.querySelectorAll('.minus-btn')
console.log(minusBtns)
for(let i=0;i< minusBtns.length; i++){
    minusBtns[i].addEventListener('click', function(){
        if (minusBtns[i].nextElementSibling.value>1){
            minusBtns[i].nextElementSibling.value--
        totalPrice()
        }
    })
}

let deleteBtns = document.querySelectorAll('.delete')
console.log(deleteBtns)
for(let i=0;i< deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', function(){
        deleteBtns[i].parentNode.remove()
        totalPrice()
    })
}

let likeBtns = document.querySelectorAll('.fa')
console.log(likeBtns)
for(let i=0; i<likeBtns.length; i++){
    likeBtns[i].addEventListener('click', function(){
        if (likeBtns[i].style.color==="rgb(158, 158, 158)"){
        likeBtns[i].style.color="red"
        }
        else {
            likeBtns[i].style.color="rgb(158, 158, 158)"
        }
    })
}
function totalPrice(){
    let sum = 0
    var Qnt = document.querySelectorAll('.QNT')
    var PRICES = document.querySelectorAll('.price')
    for (let i=0; i < Qnt.length; i++){
        sum = sum + Qnt[i].value * PRICES[i].innerHTML
    }
    document.querySelector('#finalPrice').value = sum
}
