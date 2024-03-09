function tableRow_create(){
    var tr=document.createElement("tr")
    return tr
}

function th_create(tagname,attrname1,attrvalue1,content){
            var variablename=document.createElement(tagname)
            variablename.setAttribute(attrname1,attrvalue1)
            variablename.innerHTML=content
            return variablename;
        }

function td_create(tagname,content){
    var variablename=document.createElement(tagname)
    variablename.innerHTML=content
    return variablename
}


var table=document.createElement("table")
table.className="table"

var thead=document.createElement("thead")
thead.className="thead-dark"

var tableRow0=tableRow_create("tr")
var th00=th_create("th","scope","row","#")
var th1=th_create("th","scope","col","First")
var th2=th_create("th","scope","col","Last")
var th3=th_create("th","scope","col","Handle")

tableRow0.append(th00,th1,th2,th3)
thead.append(tableRow0)

var tbody=document.createElement("tbody")

var tableRow1=tableRow_create()
var th01=th_create("th","scope","row","1")
var td1=td_create("td","Mark")
var td2=td_create("td","Otto")
var td3=td_create("td","@mdo")

tableRow1.append(th01,td1,td2,td3)
tbody.append(tableRow1)

table.append(thead,tbody)
document.body.append(table)







