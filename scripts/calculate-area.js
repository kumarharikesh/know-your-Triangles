const sides = document.querySelectorAll(".input-text");
const reset = document.querySelector("#clear");
const outputTag = document.getElementById("output");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function calculateArea() {

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
  const c = Number(sides[2].value);

  if (a + b > c && b + c > a && a + c > b) {

    const s = (a + b + c) / 2;
    const result = Math.sqrt(s *(s - a) *(s - b) *(s - c)).toFixed(2);

    outputTag.innerText = `Area of the triangle : ${result} units`;
    outputTag.style.color = "green";

  } else {
    outputTag.innerText = "Error!! Plz enter valid side lengths such that each side lengths is less than the sum of other two side.";
    outputTag.style.color = "red";
  }
  outputTag.style.textAlign = "center";
}

reset.addEventListener("click", function(){
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("calculate-area-form").addEventListener("submit", function(event){
  calculateArea();
  event.preventDefault();
});

