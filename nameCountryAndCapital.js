// Werte aus dem Local Storage abrufen und verwenden
quiz = JSON.parse(localStorage.getItem('quizArray'));

const buttonGiveUp = document.getElementById("buttonGiveUp");
const counter = document.getElementById("counter");
const counterAllCountries = quiz.length;
let countGuessedCountries = 0;
const timer = document.getElementById("timer");
const timeInMilliseconds = 1000;
let timerRunning = false;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;
let countEurope = 0;
const tableContinents = document.getElementById("tableContinents");
let previousInput;
let previousInputIndex;

const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

counter.innerHTML = "Guessed countries and capitals: " + countGuessedCountries + "/" + counterAllCountries;

setup();
updateCounter();

inputCountryOrCapital.focus();

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("inputCountryOrCapital").addEventListener("keyup", function(event) {
    // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
    if (event.keyCode === 13) {
      event.preventDefault();
      submitCountryOrCapital();
    }
});

function setup() {
    for (let continent = 0; continent < selectedCountries.length; continent++) {
        const row = document.getElementById(selectedCountries[continent].toLowerCase().replace(/ /g, "-"));
        row.style.display = "block";
    }
}

function submitCountryOrCapital() {
    const table = document.getElementById("tableCountriesAndCapitals");
    const countryOrCapitalInput = document.getElementById("inputCountryOrCapital").value;
    const result = document.getElementById("result");

    if (countryOrCapitalInput != "") {
        if (countryOrCapitalInput.toLowerCase() === "start" && !timerRunning) {
            startTimer();
            document.getElementById("inputCountryOrCapital").value = "";
        } else if (countryOrCapitalInput.toLowerCase() === "give up" || countryOrCapitalInput.toLowerCase() === "giveup") {
            giveUp();
        } else {
            
            let inputIndex = getIndex(quiz, countryOrCapitalInput);
            
            if (inputIndex < quiz.length) {
                if (inputIndex === previousInputIndex) {
                    const newRow = table.insertRow(-1); // -1 fügt die Zeile am Ende der Tabelle ein
                    newRow.id = (quiz[inputIndex].continent[0]).toLowerCase().replace(/ /g, "-");
                    
                    //country
                    const countryCell = newRow.insertCell(0);
                    countryCell.innerHTML = quiz[inputIndex].country[0];
                    //capital
                    const countryCell2 = newRow.insertCell(-1);
                    countryCell2.innerHTML = quiz[inputIndex].capital[0];
                    
                    quiz.splice(inputIndex, 1);
                    updateCounter();
                    countGuessedCountries += 1;
                    
                    counter.innerHTML = "Guessed countries: " + countGuessedCountries + "/" + counterAllCountries;
                    
                    // Leere die Eingabefelder nach dem Hinzufügen
                    result.innerHTML = "";
                    document.getElementById("inputCountryOrCapital").value = "";
                    
                    previousInputIndex = quiz.length + 1;
                    if (countGuessedCountries === countAllCountries) {
                        buttonGiveUp.style.display = "none";
                        result.innerHTML = "You guessed all countries adn capitals. Congratulation";
                    }
                } else {
                    previousInputIndex = inputIndex;
                    previousInput = getCountryOrCapital(quiz, previousInputIndex, countryOrCapitalInput);
                    document.getElementById("inputCountryOrCapital").value = "";
                    result.innerHTML = "We are searching for '" + countryOrCapitalInput + "'.";
                }
            } else {
                result.innerHTML = "There was no country or capital with the name '" + countryOrCapitalInput + "' or you already guessed it.";
                document.getElementById("inputCountryOrCapital").value = "";
            }
        }
    }
}

function updateCounter() {
    if (selectedCountries.includes("Asia")) {
        const asia = document.getElementById("asia");
        asia.innerHTML = "Asia: " + countCountries(quiz, "Asia");
    }
    if (selectedCountries.includes("Europe")) {
        const europe = document.getElementById("europe");
        europe.innerHTML = "Europe: " + countCountries(quiz, "Europe");
    }
    if (selectedCountries.includes("Oceania")) {
        const oceania = document.getElementById("oceania");
        oceania.innerHTML = "Oceania: " + countCountries(quiz, "Oceania");
    }
    if (selectedCountries.includes("Africa")) {
        const africa = document.getElementById("africa");
        africa.innerHTML = "Africa: " + countCountries(quiz, "Africa");
    }
    if (selectedCountries.includes("North America")) {
        const north_america = document.getElementById("north-america");
        north_america.innerHTML = "North America: " + countCountries(quiz, "North America");
    }
    if (selectedCountries.includes("South America")) {
        const south_america = document.getElementById("south-america");
        south_america.innerHTML = "South America: " + countCountries(quiz, "South America");
    }
}

function giveUp() {
    if (tableMissingCountriesAndCapitals.style.display != "block") {
        timerRunning = false;
        const tableMissingCountriesAndCapitals = document.getElementById("tableMissingCountriesAndCapitals");
        tableMissingCountriesAndCapitals.style.display = "block";
        for (let i = 0; i < quiz.length; i++) {
            const newRow = tableMissingCountriesAndCapitals.insertRow(-1); // -1 fügt die Zeile am Ende der Tabelle ein
            newRow.id = (quiz[i].continent[0]).toLowerCase().replace(/ /g, "-");
            
            const countryCell = newRow.insertCell(0);
            countryCell.innerHTML = quiz[i].country[0];

            const countryCell2 = newRow.insertCell(-1);
            countryCell2.innerHTML = quiz[i].capital[0];
        }
    } else {
        result.innerHTML = "You already gived up";
    }
    document.getElementById("inputCountryOrCapital").value = "";
}

function restart() {
    location.reload();
}

function startTimer() {
    timerRunning = true;
    updateTimer();
}

function updateTimer() {
    if (timerRunning) {
        inputCountryOrCapital.focus();
        timerSeconds += 1;
        if (timerSeconds === 60) {
            timerSeconds = 0;
            timerMinutes += 1;
        }
        if (timerMinutes === 60) {
            timerHours += 1;
            timerMinutes = 0;
        }
        if (timerHours === 0) {
            timer.innerHTML = String(timerMinutes).padStart(2, '0') + ":" + String(timerSeconds).padStart(2, '0');
        } else {
            timer.innerHTML = String(timerHours).padStart(2, '0') + ":" +  String(timerMinutes).padStart(2, '0') + ":" + String(timerSeconds).padStart(2, '0');    
        }
            setTimeout(updateTimer, timeInMilliseconds);
    }
}