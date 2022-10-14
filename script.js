let currentQuestion = 0;

showQuestion();

function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    document.querySelector(".scoreArea").getElementsByClassName.display =
      "none";
    document.querySelector(".questionArea").getElementsByClassName.display =
      "block";

    document.querySelector(".question").innerHTML = q.question;
  } else {
    //
  }
}
