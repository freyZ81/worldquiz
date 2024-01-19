// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const flagPicture1 = document.getElementById("flagPicture1");
const flagPicture2 = document.getElementById("flagPicture2");
const flagPicture3 = document.getElementById("flagPicture3");
const flagPicture4 = document.getElementById("flagPicture4");
let flagPicture1Index;
let flagPicture2Index;
let flagPicture3Index;
let flagPicture4Index;
let currentFlagIndeze = [];
let currentQuestion;
let correctFlag;
let newTry = false;

const extraText = document.getElementById("extraText");
extraText.innerHTML = "";
const numberAutoDelete = document.getElementById("numberAutoDelete");
let previousQuestion = 0;
const countriesLeft = document.getElementById("countriesLeft");
countriesLeft.innerHTML = "Countries left: " + quiz.length;
const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

setAllFlagsNew();

function bildKlick(imgElement) {
    var choosedPicture = imgElement.value;
    checkAnswer(choosedPicture);
}

// Überprüft die Antwort des Benutzers
function checkAnswer(choosedPicture) {
  extraText.innerHTML = "";
  if (choosedPicture === currentQuestion) {
    if (!newTry) {
        quiz[currentQuestion].count += 1;
        result.innerHTML = "Correct! Already " + quiz[currentQuestion].count + " in a row for '" + quiz[currentQuestion].country[0] + "'.";
    } else {
        result.innerHTML = "Correct! That was the flag of '" + quiz[currentQuestion].country[0] + "'.";
        newTry = false;
    }
    // Zeigt die nächste Frage an
    previousQuestion = currentQuestion;
    if (parseInt(quiz[currentQuestion].count) >= parseInt(numberAutoDelete.value)) {
      removePreviousCapital();
    }
    setAllFlagsNew();
  } else {
    quiz[currentQuestion].count = 0;
    result.innerHTML = "Wrong! You clicked the flag of '" + quiz[choosedPicture].country[0] + "'.";
    newTry = true;
  }
}

function removeCurrentCapital() {
  extraText.innerHTML = "The question about the flag of '" + quiz[currentQuestion].country[0] + "' was removed.";
  result.innerHTML = "";
  quiz.splice(currentQuestion, 1);
  setAllFlagsNew();
  countriesLeft.innerHTML = "Countries left: " + quiz.length;
}

function removePreviousCapital() {
  extraText.innerHTML = "The question about the flag of '" + quiz[previousQuestion].country[0] + "' was removed.";
  result.innerHTML = "";
  quiz.splice(previousQuestion, 1);
  if (previousQuestion < currentQuestion) {
    currentQuestion -= 1;
  }
  if (previousQuestion < flagPicture1Index) {
    flagPicture1Index -= 1;
    flagPicture1.value = flagPicture1Index;
  }
  if (previousQuestion < flagPicture2Index) {
    flagPicture2Index -= 1;
    flagPicture2.value = flagPicture2Index;

  }
  if (previousQuestion < flagPicture3Index) {
    flagPicture3Index -= 1;
    flagPicture3.value = flagPicture3Index;
  }
  if (previousQuestion < flagPicture4Index) {
    flagPicture4Index -= 1;
    flagPicture4.value = flagPicture4Index;
  }
  countriesLeft.innerHTML = "Countries left: " + quiz.length;

}

function setNewFlag(pictureId, countryIndex) {
   pictureId.src = "flags/" + quiz[countryIndex].country[quiz[countryIndex].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
   pictureId.value = countryIndex;
   pictureId.alt = quiz[countryIndex].country[quiz[countryIndex].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
}

function setAllFlagsNew() {
    correctFlag = Math.floor(Math.random() * 4);
    currentFlagIndeze = [];
    currentFlagIndeze = getRandomUniqueNumbers(4);
    setNewFlag(flagPicture1, currentFlagIndeze[0]);
    flagPicture1Index = currentFlagIndeze[0];
    setNewFlag(flagPicture2, currentFlagIndeze[1]);
    flagPicture2Index = currentFlagIndeze[1];
    setNewFlag(flagPicture3, currentFlagIndeze[2]);
    flagPicture3Index = currentFlagIndeze[2];
    setNewFlag(flagPicture4, currentFlagIndeze[3]);
    flagPicture4Index = currentFlagIndeze[3];
    currentQuestion = currentFlagIndeze[correctFlag];

    document.getElementById("question").innerHTML = "Which is the flag of '" + quiz[currentQuestion].country[0] + "'?";
}

function getRandomUniqueNumbers(count) {
    while (currentFlagIndeze.length < count) {
        var randomNumber = Math.floor(Math.random() * quiz.length);
        if (currentFlagIndeze.indexOf(randomNumber) === -1 && randomNumber != previousQuestion) {
            currentFlagIndeze.push(randomNumber);
        }
    }
    return currentFlagIndeze;
}