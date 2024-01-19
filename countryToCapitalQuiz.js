// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

// Zeigt die erste Frage an
let currentQuestion = Math.floor(Math.random() * quiz.length);
document.getElementById("question").innerHTML = "What is the capital of '" + quiz[currentQuestion].country[0] + "'?";
const extraText = document.getElementById("extraText");
extraText.innerHTML = "";
const numberAutoDelete = document.getElementById("numberAutoDelete");
let previousQuestion;
const countriesLeft = document.getElementById("countriesLeft");
countriesLeft.innerHTML = "Countries left: " + quiz.length;
const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

// Überprüft die Antwort des Benutzers
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const result = document.getElementById("result");
  extraText.innerHTML = "";

  if (userAnswer != "") {
    let correctCapital = quiz[currentQuestion].capital.map(capital => capital.toLowerCase());
    if (correctCapital.includes(userAnswer.toLowerCase())) {
      quiz[currentQuestion].count += 1;
      result.innerHTML = "Correct!" + " Already " + quiz[currentQuestion].count + " in a row for '" + quiz[currentQuestion].country[0] + "'.";
    } else {
      quiz[currentQuestion].count = 0;
      result.innerHTML = "Wrong! The capital of '" + quiz[currentQuestion].country[0] + "' is '" + quiz[currentQuestion].capital[0]
      + "' and you typed: '" + userAnswer + "'.";
    }
  
    // Zeigt die nächste Frage an
    previousQuestion = currentQuestion;
    if (parseInt(quiz[currentQuestion].count) >= parseInt(numberAutoDelete.value)) {
      removePreviousCapital();
    }
    setNewCurrentQuestion();
  }
}

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("answer").addEventListener("keyup", function(event) {
  // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
  if (event.keyCode === 13) {
    event.preventDefault();
    checkAnswer();
  }
});

function removeCurrentCapital() {
  extraText.innerHTML = "The question about the capital of '" + quiz[currentQuestion].country[0] + "' was removed.";
  result.innerHTML = "";
  quiz.splice(currentQuestion, 1);
  setNewCurrentQuestion();
  countriesLeft.innerHTML = "Countries left: " + quiz.length;
}

function removePreviousCapital() {
  extraText.innerHTML = "The question about the capital of '" + quiz[previousQuestion].country[0] + "' was removed.";
  result.innerHTML = "";
  quiz.splice(previousQuestion, 1);
  if (previousQuestion < currentQuestion) {
    currentQuestion -= 1;
  }
  countriesLeft.innerHTML = "Countries left: " + quiz.length;
  document.getElementById("answer").value = "";
}

function setNewCurrentQuestion() {
  if (quiz.length > 1){
    currentQuestion = Math.floor(Math.random() * quiz.length);
    if (previousQuestion === currentQuestion) {
      currentQuestion -= 1;
      if (currentQuestion < 0){
        currentQuestion += 2;
      }
    }
  } else {
    currentQuestion = 0;
  }
  document.getElementById("question").innerHTML = "What is the capital of '" + quiz[currentQuestion].country[0] + "'?";
  document.getElementById("answer").value = "";
}