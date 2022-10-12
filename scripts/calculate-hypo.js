const sides = document.querySelectorAll(".side-input");
const reset = document.querySelector("#clear");
const outputTag = document.querySelector(".output");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function calculateHypotenuse() {

  outputTag.innerText ="";
  outputTag.style.textAlign = "left";
  outputTag.setAttribute("placeholder", "Loading");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading...");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading...");
  await sleep(500);

  const a = Number(sides[0].value);
  const b = Number(sides[1].value);
  const sumOfSquares = a * a + b * b;

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
  outputTag.innerText = "Hypotenuse length = " + lengthOfHypotenuse;
  outputTag.style.color = "green";
  outputTag.style.textAlign = "center";
}

reset.addEventListener("click", function(){
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("calculate-hypo-form").addEventListener("submit", function(event){
  calculateHypotenuse();
  event.preventDefault();
});
