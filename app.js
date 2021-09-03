const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const slider = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");


let initialColors;

//Functions


//Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

let randomHex = generateHex();

console.log(randomHex);

function randomColors() {
  colorDivs.forEach((div,index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //add color to background
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();