const inputs = document.querySelectorAll(".angle-input");
const outputTag = document.querySelector(".output");
const reset = document.querySelector("#clear");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function isTriangle() {

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

  const a1 = Number(inputs[0].value);
  const a2 = Number(inputs[1].value);
  const a3 = Number(inputs[2].value);
  const sum = a1 + a2 + a3;

  if (sum === 180) {
    if (a1 == 0 || a2 == 0 || a3 == 0) {
      outputTag.innerText = `Sorry! your Angles don't form a Triangle `+
      `as : ${a1} + ${a2} + ${a3} == 180, but all angles should be positive non-zero too.`;
      outputTag.style.color = "red";
    } else {
      outputTag.innerText = `Wow!, Your angles form a triangle! as : ${a1} + ${a2} + ${a3} == 180 == 🔺`;
      outputTag.style.color = "green";
    }
  } 
  else {
    outputTag.innerText = `Sorry! your Angles don't form a Triangle as : ${a1} + ${a2} + ${a3} != 180`;
    outputTag.style.color = "red";
  }
  outputTag.style.textAlign = "center";
}

reset.addEventListener("click", function(){
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("angles-triangles-form").addEventListener("submit", function(event){
  isTriangle();
  event.preventDefault();
});