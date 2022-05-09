var plus = document.querySelectorAll(".btn-plus")
var minus = document.querySelectorAll(".btn_minus")
var hearts=document.querySelectorAll('#like')
var sup=document.querySelectorAll('#delete')
var quantity=document.querySelectorAll('.quantity')
 console.log(quantity)
var unitPrices=document.querySelectorAll('.unit-price')
 console.log(unitPrices)
var total=document.querySelector('#total')

function somme(){
    quantity=document.querySelectorAll('.quantity')
    unitPrices=document.querySelectorAll('.unit-price')
    var s =0
for(let i=0; i<quantity.length; i++){
s=s+quantity[i].innerHTML*unitPrices[i].innerHTML
}
total.innerHTML=s

}


// increment and decrement
for(let i=0; i<plus.length; i++){
    plus[i].addEventListener('click', function(){
        plus[i].nextElementSibling.innerHTML++;
        somme()

    });
    minus[i].addEventListener('click', function(){
        if (minus[i].previousElementSibling.innerHTML>0)
        minus[i].previousElementSibling.innerHTML--
        somme()
      
    });
};



// like 
for(let i=0; i<hearts.length; i++ ){
    hearts[i].addEventListener('click', function(){

        hearts[i].classList.toggle('x')
    })
}
// delete product
for(let i=0;i<sup.length; i++){
    sup[i].addEventListener('click', function(){
        sup[i].parentElement.remove()
        
        somme()
        console.log(quantity)
    })
}