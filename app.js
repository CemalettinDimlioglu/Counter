const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');

console.log(counter);
console.log(increaseButton);
console.log(decreaseButton);

increaseButton.addEventListener("click",()=>{
     counter.innerText++;
     
})
decreaseButton.addEventListener("click",()=>{
     counter.innerText--;
     
})