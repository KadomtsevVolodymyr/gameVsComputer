let userName = prompt("Write your name", "User");
if (userName === "") {
  userName = "User";
}
const user__name = document.querySelector(".user__name");
user__name.textContent = userName;
const btn = document.querySelector(".generate");
const userScore = document.querySelector(".user__score");
const robotScore = document.querySelector(".robot__score");
const userGenerate = document.querySelector(".user__generate");
const robotGenerate = document.querySelector(".robot__generate");
let userScoreNum = 0;
let robotScoreNum = 0;

const animation = (c) => {
  c.classList.add("rotate-scale-up");
  setTimeout(function () {
    c.classList.remove("rotate-scale-up");
  }, 750);
};

btn.addEventListener("click", () => {
  animation(robotGenerate);
  animation(userGenerate);
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  userGenerate.textContent = a;
  robotGenerate.textContent = b;
  if (a > b) {
    userScoreNum++;
    userScore.textContent = userScoreNum;
  } else if (b > a) {
    robotScoreNum++;
    robotScore.textContent = robotScoreNum;
  }
  if (userScoreNum === 3) {
    userScoreNum = 0;
    robotScoreNum = 0;
    alert(`${userName} - Win`);
  } else if (robotScoreNum === 3) {
    alert("Robot - Win");
    userScoreNum = 0;
    robotScoreNum = 0;
  }
});
