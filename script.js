var css = document.querySelector("h3");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button= document.getElementById("random");



console.log(css);
console.log(colorOne);
console.log(colorTwo);

colorOne.addEventListener("input", changeBackground)

colorTwo.addEventListener("input", changeBackground)

button.addEventListener("click", function(){
colorOne.value = getRandomColorHex();
colorTwo.value = getRandomColorHex();
changeBackground();
})

function randomNumber(){
  return Math.floor(Math.random() * (255-0))+0;
}
function getRandomColorHex() {
    const colorLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackground(){
  body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
  css.textContent = body.style.background + ";";
 }
