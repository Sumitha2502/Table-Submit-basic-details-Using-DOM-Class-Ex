// Create A form which will collect the following Information
// Note: Elements Must be created using DOM
// 1. Firstname
// 2. Middle name
// 3.lastname
// 4.Email
// Make sure after enntering the details 
// the data must be displayed in the console...

var firstname=document.createElement("label")
var break1=document.createElement("br")
firstname.innerHTML="First Name"
firstname.htmlFor="firstname"
document.body.append(firstname,break1)

var input1=document.createElement("input")
var break2=document.createElement("br")
input1.type="firstname"
input1.name="firstname"
input1.id="firstname"
document.body.append(input1,break2)



var middlename=document.createElement("label")
var break3=document.createElement("br")
middlename.innerHTML="Middle Name"
middlename.htmlFor="middlename"
document.body.append(middlename,break3)

var input3=document.createElement("input")
var break4=document.createElement("br")
input3.type="middlename" 
input3.name="middlename"
input3.id="middlename"
document.body.append(input3,break4)

var lastname=document.createElement("label")
var break5=document.createElement("br")
lastname.innerHTML="Last Name"
lastname.htmlFor="lastname"
document.body.append(lastname,break5) 

var input2=document.createElement("input")
var break6=document.createElement("br")
input2.type="lastname"
input2.name="lastname"
input2.id="lastname"
document.body.append(input2,break6)

var emailCon=document.createElement("label")
var break7=document.createElement("br")
emailCon.innerHTML="Email"
emailCon.htmlFor="email"
document.body.append(emailCon,break7)

var input4=document.createElement("input")
var break8=document.createElement("br")
input4.type="email"
input4.name="email"
input4.id="email"
document.body.append(input4,break8)

var button=document.createElement("button")
var break9=document.createElement("br")
button.type="button"
// button.onclick="foo()"
button.setAttribute("onclick","foo()")
button.innerHTML="Clickme"
document.body.append(button,break9)



// var fNameCon=document.getElementById("firstname").value
// console.log(fNameCon)


function foo(){
    var first= document.getElementById("firstname").value
    console.log(first)
    var middle= document.getElementById("middlename").value
    console.log(middle)
    var last= document.getElementById("lastname").value
    console.log(last)
    var emailId= document.getElementById("email").value
    console.log(emailId)
}