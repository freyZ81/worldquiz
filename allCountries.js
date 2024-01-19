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

const choosedContinents = document.getElementById("choosedContinents");
choosedContinents.innerHTML = "Countries of: " + selectedCountries.join(', ');

counter.innerHTML = "Guessed countries: " + countGuessedCountries + "/" + counterAllCountries;

setup();
updateCounter();

inputCountry.focus();

function setup() {
    for (let continent = 0; continent < selectedCountries.length; continent++) {
        const row = document.getElementById(selectedCountries[continent].toLowerCase().replace(/ /g, "-"));
        row.style.display = "block";
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

function submitCountry() {
    const table = document.getElementById("tableCountries");
    const countryInput = document.getElementById("inputCountry").value;
    const result = document.getElementById("result");

    if (countryInput != "") {
        if (countryInput.toLowerCase() === "start" && !timerRunning) {
            startTimer();
            document.getElementById("inputCountry").value = "";
        } else if ((countryInput.toLowerCase() === "give up" || countryInput.toLowerCase() === "giveup")) {
                giveUp();
        } else {
            let countryIndex = getCountryIndex(quiz, countryInput);
            
            if (countryIndex < quiz.length) {
                const newRow = table.insertRow(-1); // -1 fügt die Zeile am Ende der Tabelle ein
                newRow.id = (quiz[countryIndex].continent[0]).toLowerCase().replace(/ /g, "-");
                
                const countryCell = newRow.insertCell(0);
                countryCell.innerHTML = quiz[countryIndex].country[0];
                
                quiz.splice(countryIndex, 1);
                updateCounter();
                countGuessedCountries += 1;
                
                counter.innerHTML = "Guessed countries: " + countGuessedCountries + "/" + counterAllCountries;
                
                // Leere die Eingabefelder nach dem Hinzufügen
                result.innerHTML = "";
                document.getElementById("inputCountry").value = "";
                
                if (countGuessedCountries === countAllCountries) {
                    buttonGiveUp.style.display = "none";
                    result.innerHTML = "You guessed all countries. Congratulation";
                }
            } else {
                result.innerHTML = "There was no country with the name: '" + countryInput + "' or you already guessed it.";
                document.getElementById("inputCountry").value = "";
            }
        }
    }
}

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("inputCountry").addEventListener("keyup", function(event) {
    // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
    if (event.keyCode === 13) {
      event.preventDefault();
      submitCountry();
    }
});

function giveUp() {
    if (tableMissingCountries.style.display != "block") {
        timerRunning = false;
        const tableMissingCountries = document.getElementById("tableMissingCountries");
        tableMissingCountries.style.display = "block";
        for (let i = 0; i < quiz.length; i++) {
            const newRow = tableMissingCountries.insertRow(-1); // -1 fügt die Zeile am Ende der Tabelle ein
            newRow.id = (quiz[i].continent[0]).toLowerCase().replace(/ /g, "-");
            
            const countryCell = newRow.insertCell(0);
            countryCell.innerHTML = quiz[i].country[0];
        }
    } else {
        result.innerHTML = "You already gived up";
    }
    document.getElementById("inputCountry").value = "";
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
        inputCountry.focus();
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
