var One = document.querySelector("#one")
var Two = document.querySelector("#two")
var Three = document.querySelector("#three")
console.log("connected")
One.addEventListener("mouseover",function() {
  One.textContent="hover done"
  One.style.color="red"

})

One.addEventListener("mouseout",function() {
  One.textContent="I am Hover"
  One.style.color="black"
})

Two.addEventListener("click",function() {
  Two.textContent="clicked"
  Two.style.color="blue"
})
Three.addEventListener("dblclick",function() {
  Three.textContent="double clicked"
  Three.style.color="orange"
})
