const quizform = document.querySelector(".quiz-form");
const reset = document.querySelector("#clear");
const outputTag = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "Right angled",
  "One right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "No",
  "45°"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function calculateScore() {

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

  const formResults = new FormData(quizform);
  let score = 0, index = 0;

  for (let value of formResults.values()) {
    // console.log(value);
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputTag.innerText = "Your score is " + score;
  outputTag.style.color = "green";
  outputTag.style.textAlign = "center";
}

reset.addEventListener("click", function(){
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("quiz-form").addEventListener("submit", function(event){
  calculateScore();
  event.preventDefault();
});
