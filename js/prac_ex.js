// var lbs =prompt("enter the weightin lbs");
// alert("wieght in Kg: "+ lbs*0.454)
// console.log("thanks");
var f_name =prompt("enter your first name")
var l_name= prompt("enter your last name")
var age = prompt("enter your age")
var height=prompt("enter your height in cm")
var pet_name=prompt("enter your pet name")
if(f_name[0]===l_name[0]){
  if(age>20 && age<30){if(height>170 && pet_name.endsWith("y")){console.log("you passed the spy test")}}
}
else{console.log("try next time")}
