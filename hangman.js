// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const result = document.getElementById("result");
const word = document.getElementById("word");
const input = document.getElementById("inputLetter");
const wrongLetters = document.getElementById("wrongLetters");
const leftGuesses = document.getElementById("leftGuesses");
const maxGuessesInput = document.getElementById("maxNumbersOfGuesses").value;
let maxGuesses = maxGuessesInput;
let countWrongGuesses = 0;
let wordtype;
let wordToGuess;
let guessedWord = "";
let wordIndex;
let wordToGuessLong;
let wrongLettersList = [];


const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

input.focus();
setNewWord();

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("inputLetter").addEventListener("keyup", function(event) {
    // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
    if (event.keyCode === 13) {
      event.preventDefault();
      submitLetter();
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
    guessedWord = "";
    for(let i = 0; i < wordToGuess.length; i++) {
        guessedWord += "-";
    }
    word.innerHTML = guessedWord;
    resetAllValues();
    if (maxGuesses != "") {   
        leftGuesses.innerHTML = (maxGuesses - countWrongGuesses) + " guesses left of " + maxGuesses;
    }
}

function submitLetter() {
    const letterInput = document.getElementById("inputLetter").value;
    let allWords;

    setLeftGuesses();


    
    if (wordtype === "country") {
        allWords = quiz[wordIndex].country.map(country => country.toLowerCase());
    } else if (wordtype === "capital") {
        allWords = quiz[wordIndex].capital.map(capital => capital.toLowerCase());
    }
    result.innerHTML = " ";
    if (letterInput != "") {
        if (allWords.includes(letterInput.toLowerCase())) {
            //wenn man das ganze Wort eingegeben hat
            word.innerHTML = wordToGuessLong;
            finishedGuessing();
        } else if (wordToGuess.toLowerCase().includes(letterInput.toLowerCase())
            && !guessedWord.toLowerCase().includes(letterInput.toLowerCase())) {
            //wenn man einen richtigen Buchstaben eingegeben hat
            
            const indices = [];

            for(let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i].toLowerCase() === letterInput.toLowerCase()) {
                    indices.push(i);
                }
            }
            
            for(let i = 0; i < indices.length; i++) {
                let indexToReplace = indices[i];
                guessedWord = guessedWord.slice(0, indexToReplace) + guessedWord.slice(indexToReplace + 1);
                guessedWord = guessedWord.substring(0, indexToReplace) + letterInput + guessedWord.substring(indexToReplace);
            }
        
            if (guessedWord === wordToGuess.toLowerCase()) {
                word.innerHTML = wordToGuessLong;            
                finishedGuessing();
            } else {
                word.innerHTML = guessedWord;
            }
            
            document.getElementById("inputLetter").value = "";
        } else {
            //wenn der Buchstabe nicht im gesuchten Wort ist
            if (!wrongLettersList.includes(letterInput)) {
                //wenn der geguesste Buchstabe vorher noch nicht falsch geguesst wurde
                countWrongGuesses += 1;
                setLeftGuesses();
                if (maxGuesses != "") {   
                    leftGuesses.innerHTML = (maxGuesses - countWrongGuesses) + " guesses left of " + maxGuesses;
                }
                
                wrongLettersList.push(letterInput);
                if (wrongLettersList.length > 1) {
                    wrongLetters.innerHTML = "Wrong guesses: " + wrongLettersList.join(', ');
                } else {
                    wrongLetters.innerHTML = "Wrong guesses: " + wrongLettersList;
                }
                result.innerHTML = "'" + letterInput + "' is not (in) the word.";
                if (maxGuesses != "") {
                    if (maxGuesses <= countWrongGuesses) {
                        giveUp();
                    }
                }
            } else {
                result.innerHTML = "'" + letterInput + "' was guessed already.";
            }
            document.getElementById("inputLetter").value = "";
        }
    }
}

function finishedGuessing() {
    result.innerHTML = "You guessed the correct " + wordtype + ". It was '" + wordToGuessLong + "'.";
    resetAllValues();
    setTimeout(setNewWord, 1500);
}

function giveUp() {
    result.innerHTML = "The correct " + wordtype + " was '" + wordToGuessLong + "'.";
    word.innerHTML = wordToGuessLong;
    setTimeout(setNewWord, 1500);
    //resetAllValues();
}

function resetAllValues() {
    document.getElementById("inputLetter").value = "";
    wrongLetters.innerHTML = "";
    result.innerHTML = "";
    wrongLettersList = [];
    countWrongGuesses = 0;
    setLeftGuesses();
}

function setLeftGuesses() {
    const maxGuessesInput = document.getElementById("maxNumbersOfGuesses").value;
    maxGuesses = maxGuessesInput;
    if (maxGuesses != "") {   
        leftGuesses.innerHTML = (maxGuesses - countWrongGuesses) + " guesses left of " + maxGuesses;
    }
}