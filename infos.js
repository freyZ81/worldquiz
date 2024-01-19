const flagPicture = document.getElementById("flagPicture");
const infoContinent = document.getElementById("infoContinent");
const infoCountry = document.getElementById("infoCountry");
const infoCapital = document.getElementById("infoCapital");
const result = document.getElementById("result");

function getInfos() {
    const userAnswer = document.getElementById("question").value;
    let i = getIndex(countries, userAnswer.toLowerCase());

    if (i < countries.length) {   
        result.innerHTML = "";
        infoContinent.innerHTML = "Continent: " + countries[i].continent;
        infoCountry.innerHTML = "Country: " + countries[i].country[0];
        infoCapital.innerHTML = "Capital: " + countries[i].capital[0];
        
        const blockFlagPicture = document.getElementById("blockFlagPicture");
        blockFlagPicture.style.display = "block";
        flagPicture.src = "flags/" + countries[i].country[countries[i].country.length-1].toLowerCase() + ".jpg"; // Passe den Pfad zum gewünschten Bild an
        
        document.getElementById("question").value = "";
    } else {
        result.innerHTML = "There was neither a country nor a capital found with the name '"
        + userAnswer + "'.";
    }
}

// Überprüft, ob die Enter-Taste gedrückt wurde
document.getElementById("question").addEventListener("keyup", function(event) {
    // Wenn Enter gedrückt wurde, überprüfen wir die Antwort
    if (event.keyCode === 13) {
      event.preventDefault();
      getInfos();
    }
});