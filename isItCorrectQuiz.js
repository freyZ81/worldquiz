// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const flagPicture = document.getElementById("flagPicture");
const hintButton = document.getElementById("hintButton");
const result = document.getElementById("result");
let currentQuestion;
let questionType;
let isCorrect;
let wrongFlagIndex;
let correctAnswer;
const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

//Zeigt erste Frage
setQuestion();

function checkAnswer(value) {
    if (value === isCorrect) {
        document.getElementById("result").innerHTML = "You were right. ";
        correctAnswer = true;
    } else {
        document.getElementById("result").innerHTML = "You were wrong. ";
        correctAnswer = false;
    }
    document.getElementById("hint").innerHTML = "";
    if (questionType === 0) {
        answerFlagToCountry();
    } else if (questionType === 1) {
        answerFlagToCapital();
    } else {
        answerCapitalToCountry();
    }
}

function setQuestion() {
    currentQuestion = Math.floor(Math.random() * quiz.length);
    questionType = Math.floor(Math.random() * 3);
    isCorrect = Math.random() < 0.5;
    /*
        Flagge zu Land      -> 0
        Flagge zu Capital   -> 1
        Land zu Capital     -> 2
    */
    if (questionType === 0) {
        setFlagToCountry(currentQuestion, isCorrect);
    } else if (questionType === 1) {
        setFlagToCapital(currentQuestion, isCorrect);
    } else {
        setCapitalToCountry(currentQuestion, isCorrect);
    }
}

function setFlagToCountry(currentQuestion, isCorrect) {
    flagPicture.style.display = "block";
    hintButton.style.display = "none";
    document.getElementById("question").innerHTML = "Is it correct that the following is the flag of '" + quiz[currentQuestion].country[0] + "'?";
    if (isCorrect) {
        flagPicture.src = "flags/" + quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
    } else {
        wrongFlagIndex = Math.floor(Math.random() * quiz.length);
        if (wrongFlagIndex === currentQuestion) {
            wrongFlagIndex += 15;
            if (wrongFlagIndex >= quiz.length) {
                wrongFlagIndex -= 40;
            }
        }
        flagPicture.src = "flags/" + quiz[wrongFlagIndex].country[quiz[wrongFlagIndex].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
    }
}

function setFlagToCapital(currentQuestion, isCorrect) {
    hintButton.style.display = "block";
    flagPicture.style.display = "block";
    document.getElementById("question").innerHTML = "Is it correct that the following flag belongs to the country with the capital '"
    + quiz[currentQuestion].capital[0] + "'?";
    if (isCorrect) {
        flagPicture.src = "flags/" + quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
    } else {
        wrongFlagIndex = Math.floor(Math.random() * quiz.length);
        if (wrongFlagIndex === currentQuestion) {
            wrongFlagIndex += 15;
            if (wrongFlagIndex >= quiz.length) {
                wrongFlagIndex -= 40;
            }
        }
        flagPicture.src = "flags/" + quiz[wrongFlagIndex].country[quiz[wrongFlagIndex].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
    }
}

function setCapitalToCountry(currentQuestion, isCorrect) {
    flagPicture.style.display = "none";
    hintButton.style.display = "none";
    if (isCorrect) {
        document.getElementById("question").innerHTML = "Is it correct that '" + quiz[currentQuestion].capital[0] + "' is the capital of '" + quiz[currentQuestion].country[0] + "'?";
    } else {
        wrongFlagIndex = Math.floor(Math.random() * quiz.length);
        if (wrongFlagIndex === currentQuestion) {
            wrongFlagIndex += 15;
            if (wrongFlagIndex >= quiz.length) {
                wrongFlagIndex -= 40;
            }
        }
        document.getElementById("question").innerHTML = "Is it correct that '" + quiz[currentQuestion].capital[0] + "' is the capital of '" + quiz[wrongFlagIndex].country[0] + "'?";
    }
}

function answerFlagToCountry() {
    document.getElementById("result").innerHTML += "That was the flag of '";
    if (isCorrect) {
        document.getElementById("result").innerHTML += quiz[currentQuestion].country[0];
    } else {
        document.getElementById("result").innerHTML += quiz[wrongFlagIndex].country[0];
    }
    document.getElementById("result").innerHTML += "'.";
    setQuestion();
}

function answerFlagToCapital() {
    document.getElementById("result").innerHTML += "That was the flag of '";
    if (isCorrect) {
        document.getElementById("result").innerHTML += (quiz[currentQuestion].country[0]
        + "' and '" + quiz[currentQuestion].capital[0] + "' is the capital.");
    } else {
        document.getElementById("result").innerHTML += (quiz[wrongFlagIndex].country[0]
        + "' with the capital '" + quiz[wrongFlagIndex].capital[0]
        + "' and '" + quiz[currentQuestion].capital[0]
        + "' is the capital from '" + quiz[currentQuestion].country[0] + "'.");
    }

    setQuestion();
}

function answerCapitalToCountry() {
    if (correctAnswer && !isCorrect) {
        document.getElementById("result").innerHTML += ("'" + quiz[currentQuestion].capital[0]
        + "' is the capital of '" + quiz[currentQuestion].country[0] + "' and '" + quiz[wrongFlagIndex].capital[0]
        + "' from '" + quiz[wrongFlagIndex].country[0] + "'.");
    } else if ((!correctAnswer || correctAnswer) && isCorrect) {
        document.getElementById("result").innerHTML += ("'" + quiz[currentQuestion].capital[0]
        + "' is the capital of '" + quiz[currentQuestion].country[0] + "'.");
    }
    setQuestion();
}

function giveHint(){
    if (isCorrect) {
        document.getElementById("hint").innerHTML = ("That is the flag of " + quiz[currentQuestion].country[0] + ".");
        flagPicture.src = "flags/" + quiz[currentQuestion].country[quiz[currentQuestion].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
    } else {
        document.getElementById("hint").innerHTML = ("That is the flag of " + quiz[wrongFlagIndex].country[0] + ".");
    }
}