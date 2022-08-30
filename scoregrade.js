var score = 100;
function checkScore() {
  var userScore = parseInt(userInput.value);
  var wise = new Audio("you-think-say-you-dey-wise.mp3");
  var sorry = new Audio("sorry.mp3");
  var clap = new Audio("clap.mp3");
  var leftYou = new Audio("They-av-left-you-behind.mp3");
  if (userScore >= 90 && userScore <= score) {
    // alert(
    //   "Congratulation! you passed your examination in a flying color. Your score grade is (A)"
    // );
    displayUserScore.innerHTML =
      "<p>Congratulation! you passed your examination in a flying color. Your score grade is (A)</p>";
    clap.play();
  } else if (userScore >= 80 && userScore <= 89) {
    // alert(
    //   "congratulation! You passed the examination. Your score grade is (B)"
    // );
    displayUserScore.innerHTML =
      "<p>congratulation! You passed the examination. Your score grade is (B)</p>";
    clap.play();
  } else if (userScore >= 65 && userScore <= 79) {
    // alert(
    //   "Congratulation! you passed the examination. Your score grade is (C)"
    // );
    displayUserScore.innerHTML =
      "<p>Congratulation! you passed the examination. Your score grade is (C)</p>";
    clap.play();
  } else if (userScore >= 50 && userScore <= 64) {
    // alert(
    //   "Congratulation! you passed the examination. Your score grade is (D)"
    // );
    displayUserScore.innerHTML =
      "<p>Congratulation! you passed the examination. Your score grade is (D)</p>";
    clap.play();
  } else if (userScore >= 35 && userScore <= 49) {
    // alert(
    //   "Sorry! your performance was poor, sit up next time. Your score grade is (E)"
    // );
    displayUserScore.innerHTML =
      "<p>Sorry! your performance is poor, sit up next time. Your score grade is (E)</p>";
    sorry.play();
  } else if (userScore >= 0 && userScore <= 34) {
    // alert(
    //   "Sorry! your performance was very poor, sit up next time. Your score grade is (F)"
    // );
    displayUserScore.innerHTML =
      "<p>Sorry! your performance is very poor, sit up next time. Your score grade is (F)</p>";
    leftYou.play();
  } else {
    // alert(
    //   "You think you are wise? that's an invalid score. your score can not not be less than 1 and can not be greater than 100"
    // );
    displayUserScore.innerHTML =
      "<p>You think you are wise? that's an invalid score. your score can not not be less than 1 and can not be greater than 100</P>";
    wise.play();
  }
}
