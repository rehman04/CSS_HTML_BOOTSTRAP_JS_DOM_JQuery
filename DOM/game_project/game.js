var restart = document.querySelector("#b");

var squares= document.querySelectorAll("td");

function clearBoard() {
  for (var i=0; i< squares.length;i++){
    squares[i].textContent="";
  }
}

restart.addEventListener("click",clearBoard);

// var on = document.querySelector("#one")
//
// on.addEventListener("click",function() {
//   if (on.textContent===""){
//     on.textContent="X";
//   }
//   else if (on.textContent==="X") {
//     on.textContent="O";
//   }
//   else {
//     on.textContent="";
//   }
//
// })

function changeMarker(){
  if (this.textContent===""){
     this.textContent="X";
   }
   else if (this.textContent==="X") {
     this.textContent="O";
   }
   else {
     this.textContent="";
   }
} 

for(var i=0;squares.length;i++){
  squares[i].addEventListener("click",changeMarker)
}
