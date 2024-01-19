// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const result = document.getElementById("result");
const scrambledWord = document.getElementById("scrambledWord");
let wordtype = "";
let wordToGuess;
let wordToGuessLong;



setNewWord();

inputWord.focus();



const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("inputWord").addEventListener("keyup", function(event) {
    // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
    if (event.keyCode === 13) {
      event.preventDefault();
      submitWord();
    }
});

function setNewWord() {
    wordIndex = Math.floor(Math.random() * quiz.length);
    const checkboxCountry = document.getElementById("checkboxCountry");
    const checkboxCapital = document.getElementById("checkboxCapital");

    if (checkboxCapital.checked && checkboxCountry.checked) {
        const wordTypeIndex = Math.floor(Math.random() * 2);
        if (wordTypeIndex === 1) {
            wordtype = "country";
            wordToGuess = quiz[wordIndex].country[0];
        } else {
            wordtype = "capital";
            wordToGuess = quiz[wordIndex].capital[0];
        }
    } else if (checkboxCountry.checked) {
        wordtype = "country";
        wordToGuess = quiz[wordIndex].country[0];
    } else if (checkboxCapital.checked) {
        wordtype = "capital";
        wordToGuess = quiz[wordIndex].capital[0];
    }
    
    wordToGuessLong = wordToGuess;
    wordToGuess = wordToGuess.replace(/ /g, "");

    var buchstabenArray = wordToGuess.split("");

    // Mische die Buchstaben im Array
    for (var i = buchstabenArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = buchstabenArray[i];
        buchstabenArray[i] = buchstabenArray[j];
        buchstabenArray[j] = temp;
    }

    // Setze das gemischte Wort wieder zusammen
    wordToGuess = buchstabenArray.join(" ");

    scrambledWord.innerHTML = wordToGuess;
    question.innerHTML = "Which " + wordtype + " is the following word?";
    inputWord.focus();
}

function submitWord() {
    const inputWord = document.getElementById("inputWord").value;

    if (wordtype === "country") {
        allWords = quiz[wordIndex].country.map(country => country.toLowerCase());
    } else if (wordtype === "capital") {
        allWords = quiz[wordIndex].capital.map(capital => capital.toLowerCase());
    }

    result.innerHTML = " ";
    if (inputWord != "") {
        if ((inputWord.toLowerCase() === "give up" || inputWord.toLowerCase() === "giveup")) {
            giveUp();
        } else if (allWords.includes(inputWord.toLowerCase())) {
            scrambledWord.innerHTML = wordToGuessLong;
            result.innerHTML = "You guessed the correct " + wordtype + ".  It was '" + wordToGuessLong + "'.";
            document.getElementById("inputWord").value = "";
            setTimeout(setNewWord, 1500);
        } else {
            result.innerHTML = "With '" + inputWord + "' you guessed the wrong " + wordtype + ".";
            document.getElementById("inputWord").value = "";
        }

    }
}

function giveUp() {
    scrambledWord.innerHTML = wordToGuessLong;
    result.innerHTML = "The searched " + wordtype + " was '" + wordToGuessLong + "'.";
    document.getElementById("inputWord").value = "";
    setTimeout(setNewWord, 1500);
}