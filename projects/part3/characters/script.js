/* Functions */
function addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

/* Toggle for character creator */
const showOrHideCharacterCreator = () => {
    document.getElementById("character-creator").classList.toggle("hidden");
};

/* Toggle for character manager */
const showOrHideCharacterManager = () => {
    document.getElementById("manage-character-div").classList.toggle("hidden");
};

/* Determines what subraces you can choose based on what race you choose */
const determineSubRaces = () => {
    const race = document.getElementById("character-race").value;
    let subRaceList = document.getElementById("character-sub-race");

    // Clears the existing options
    subRaceList.innerHTML = "";

    // Checking the race chosen for subraces, the SRD apparently only has 1 subrace for many of the races
    if (race=="dwarf") {
       addOption(subRaceList, "hill-dwarf", "Hill Dwarf");
    }
    else if (race=="elf") {
        addOption(subRaceList, "high-elf", "High Elf");
    }
    else if (race=="dragonborn") {
        const dBornAncestries = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];
        for (let i = 0; i < dBornAncestries.length; i++) {
            addOption(subRaceList, dBornAncestries[i].toLowerCase(), dBornAncestries[i]);
        }
    }
    else if (race=="halfling") {
        addOption(subRaceList, "lightfoot", "Lightfoot");
    }
    else if (race=="gnome") {
        addOption(subRaceList, "rock-gnome", "Rock Gnome");
    }
    else if ((race=="half-elf")||(race=="half-orc")||(race=="tiefling")||(race=="human")) {
        addOption(subRaceList, "no subrace");
    }
    else {
        addOption(subRaceList, "unknown", "Unable to find subrace");
    }
};

window.onload = () => {
    document.getElementById("create-character").onclick = showOrHideCharacterCreator;
    document.getElementById("manage-character").onclick = showOrHideCharacterManager;
    document.getElementById("character-race").onchange = determineSubRaces;

    // Calculate modifier functions, functions found in calculation.js
    document.getElementById("strength-txt").onchange = calculateStrMod;
    document.getElementById("dexerity-txt").onchange = calculateDexMod;
    document.getElementById("constitution-txt").onchange = calculateConMod;
    document.getElementById("wisdom-txt").onchange = calculateWisMod;
    document.getElementById("intelligence-txt").onchange = calculateIntMod;
    document.getElementById("charisma-txt").onchange = calculateChaMod;

    // Proficiency bonus
    document.getElementById("character-level-txt").onchange = calculateProfBonus;

    // From common-script
    document.getElementById("nav").onclick = showOrHide;

    // Pregen characters to show user how they could use the webtool, functions found in pregenCharacters.js
    document.getElementById("elara").onclick = elara;
    document.getElementById("thrain").onclick = elara;
    document.getElementById("sylas").onclick = elara;
    document.getElementById("aria").onclick = elara;
    document.getElementById("drakar").onclick = elara;
};