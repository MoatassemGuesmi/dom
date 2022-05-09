

var input=document.querySelector("#input")
var add=document.querySelector("button")
var list=document.querySelector("ul")

add.addEventListener("click", function(){
   
 var text =  document.createTextNode(input.value) 

 var ellist=document.createElement("li")
 ellist.appendChild(text)
 if(input.value){
    list.appendChild(ellist)
}
 
 var remove=document.createElement("button")
 var icon =document.createElement('i')
 remove.appendChild(icon)
 icon.classList.add('fa-solid')
 icon.classList.add('fa-x')
  ellist.appendChild(remove)
  input.value=""
 remove.addEventListener("click", function(){
    ellist.remove()
})
  
}  )
