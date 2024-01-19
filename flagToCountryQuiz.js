// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const checkboxSaveContinent = document.getElementById("checkSaveContinent");
const checkboxCheckCountry = document.getElementById("checkCheckCountry");
const blockCheckCountry = document.getElementById("blockCheckCountry");
const notes = document.getElementById("notes");
const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

checkboxSaveContinent.addEventListener("click", updateBoxCheckCountry)
function updateBoxCheckCountry() {
  if (checkboxSaveContinent.checked) {
    blockCheckCountry.style.display = "block";
  } else {
    blockCheckCountry.style.display = "none";
  }
}

// Zeigt die erste Frage an
let currentQuestion = Math.floor(Math.random() * quiz.length);

const flagPicture = document.getElementById("flagPicture");
flagPicture.src = "flags/" + quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
flagPicture.alt = quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg";
notes.innerHTML = quiz[currentQuestion].notes;

const extraText = document.getElementById("extraText");
extraText.innerHTML = "";
const numberAutoDelete = document.getElementById("numberAutoDelete");
let previousQuestion;
const countriesLeft = document.getElementById("countriesLeft");
countriesLeft.innerHTML = "Countries left: " + quiz.length;

// Überprüft die Antwort des Benutzers
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const result = document.getElementById("result");
  extraText.innerHTML = "";

  if (userAnswer != "") {

    let allContinents = ["europe", "asia", "oceania", "africa", "north america", "south america"];
    let correctCountry = quiz[currentQuestion].country.map(country => country.toLowerCase());
    if (correctCountry.includes(userAnswer.toLowerCase())) {
      quiz[currentQuestion].count += 1;
      result.innerHTML = "Correct!" + " Already " + quiz[currentQuestion].count + " in a row for '" + quiz[currentQuestion].country[0] + "'.";
    } else if (checkboxSaveContinent.checked) {
      if (checkboxCheckCountry.checked) {
        if (allContinents.includes(userAnswer.toLowerCase())) {
          
          let currentContinents = quiz[currentQuestion].continent.map(continent => continent.toLowerCase());
          if (currentContinents.includes(userAnswer.toLowerCase())) {
            
            //if (capitalizeFirstLetter(userAnswer) === quiz[currentQuestion].continent) {
              result.innerHTML = "Yes, the flag is of a country in '" + capitalizeFirstLetter(userAnswer) + "'.";
              quiz[currentQuestion].notes = "Continent: '" + quiz[currentQuestion].continent + "'";
            } else {
              result.innerHTML = "No, the flag is not of a country in '" + userAnswer + "'.";
            }
          } else {
            result.innerHTML = "Wrong! That is the flag of '" + quiz[currentQuestion].country[0]
            + "' and you typed: '" + userAnswer + "'.";      }
          } else {
            if (allContinents.includes(userAnswer.toLowerCase())) {
              quiz[currentQuestion].notes = "Guessed continent: '" + capitalizeFirstLetter(userAnswer) + "'";
              result.innerHTML = "You guessed the continent: '" + capitalizeFirstLetter(userAnswer) + "'.";
            } else {
        result.innerHTML = "Wrong! That is the flag of '" + quiz[currentQuestion].country[0]
        + "' and you typed: '" + userAnswer + "'.";      }
      }
    } else {
      quiz[currentQuestion].count = 0;
      result.innerHTML = "Wrong! That is the flag of '" + quiz[currentQuestion].country[0]
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

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function removeCurrentCapital() {
  extraText.innerHTML = "The question about the flag of '" + quiz[currentQuestion].country[0] + "' was removed.";
  result.innerHTML = "";
  quiz.splice(currentQuestion, 1);
  setNewCurrentQuestion();
  countriesLeft.innerHTML = "Countries left: " + quiz.length;
}

function removePreviousCapital() {
  extraText.innerHTML = "The question about the flag of '" + quiz[previousQuestion].country[0] + "' was removed.";
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
  flagPicture.src = "flags/" + quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
  flagPicture.alt = quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg";
  document.getElementById("answer").value = "";
  notes.innerHTML = quiz[currentQuestion].notes;
}