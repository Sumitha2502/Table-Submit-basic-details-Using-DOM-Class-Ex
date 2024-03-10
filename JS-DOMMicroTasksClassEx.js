var res1=document.createElement("div")
res1.innerHTML="If we mouse over the element the color should change"
res1.addEventListener('mouseover', function handleMouseOver() {
    res1.style.color = 'red';
  });



var button=document.createElement("button")
button.addEventListener("click",foo)
button.innerHTML="Clickme"
res1.append(button)
document.body.append(res1)

function foo(){ 
    var res=prompt("Enter name")
    var div=document.createElement("div")
    div.innerHTML=`Name:${res}`
    document.body.append(div)
}

