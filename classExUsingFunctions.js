function label_create(tagname,attrName,attrValue,content){
    var variablename=document.createElement(tagname)
    variablename.setAttribute(attrName,attrValue)
    variablename.innerHTML=content
    return variablename;
}

function break_create(){
    var variablename=document.createElement("br")
    return variablename;
}

function input_create(tagname,attrName1,attrValue1,attrName2,attrValue2){
    var variablename=document.createElement(tagname)
    variablename.setAttribute(attrName1,attrValue1)
    variablename.setAttribute(attrName2,attrValue2)
    return variablename;
}

function button_create(tagname,attrName1,attrValue1,attrName2,attrValue2,content){
    var variablename=document.createElement(tagname)
    variablename.setAttribute(attrName1,attrValue1)
    variablename.setAttribute(attrName2,attrValue2)
    variablename.innerHTML=content
    return variablename;
}

var firstname=label_create("label","for","firstname","First Name")
var fname_break1=break_create()
var firstname_input=input_create("input","type","text","id","firstname")
var fname_break2=break_create()

var middlename=label_create("label","for","middlename","Middle Name")
var mname_break1=break_create()
var middlename_input=input_create("input","type","text","id","middlename")
var mname_break2=break_create()

var lastname=label_create("label","for","lastname","Last Name")
var lname_break1=break_create()
var lastname_input=input_create("input","type","text","id","lastname")
var lname_break2=break_create()

var email=label_create("label","for","email","Email")
var email_break1=break_create()
var email_input=input_create("input","type","text","id","email")
var email_break2=break_create()

var password=label_create("label","for","password","Password")
var password_break1=break_create()
var password_input=input_create("input","type","text","id","password")
var password_break2=break_create()

var button=button_create("button","type","button","onclick","foo()","ClickMe")


document.body.append(firstname,fname_break1,firstname_input,fname_break2,middlename,mname_break1,middlename_input,mname_break2,lastname,lname_break1,lastname_input,lname_break2,email,email_break1,email_input,email_break2,password,password_break1,password_input,password_break2,button)

function foo(){
    var first= document.getElementById("firstname").value
    console.log(first)
    var middle= document.getElementById("middlename").value
    console.log(middle)
    var last= document.getElementById("lastname").value
    console.log(last)
    var emailId= document.getElementById("email").value
    console.log(emailId)
    var password=document.getElementById("passowrd")
    console.log(password)
}