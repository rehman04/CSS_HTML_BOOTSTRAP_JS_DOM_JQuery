var action
var list=[]
var ad
var rem

while(1){
action  = prompt("Please select an action: add , remove , display , or quit!")
if(action == "add"){
  add()
}
else if(action == "remove"){
  remove()
}
else if(action == "display"){
  display()
}
else if(action == "quit"){
  quit()
}


function add(){ad=prompt("what name whould you like to add?")
list.push(ad)}

function remove(){
rem=prompt("what name whould you like to remove?")
list.pop(rem)}

function display(){
console.log(list)}

function quit(){
  break
}
}
alert("Thanks you can proceed now")
