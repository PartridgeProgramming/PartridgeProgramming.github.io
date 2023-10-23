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

/* Calculate ability modifiers */
const calculateStrMod = () => {
    // Get the values of the attributes
    const str = document.getElementById("strength-txt").value;
    
    // Get the HTML element to display
    const strModHTML = document.getElementById("str-mod");

    // Calculates the modifier
    const strMod = Math.floor((str-10)/2)

    // Display modifier
    strModHTML.innerHTML = `Str mod: ${strMod}`;      
};

const calculateDexMod = () => {
    // Get the values of the attributes
    const dex = document.getElementById("dexerity-txt").value;
    
    // Get the HTML element to display
    const dexModHTML = document.getElementById("dex-mod");

    // Calculates the modifier
    const dexMod = Math.floor((dex-10)/2)

    // Display modifier
    dexModHTML.innerHTML = `Dex mod: ${dexMod}`;      
};

const calculateConMod = () => {
    // Get the values of the attributes
    const con = document.getElementById("constitution-txt").value;
    
    // Get the HTML element to display
    const conModHTML = document.getElementById("con-mod");

    // Calculates the modifier
    const conMod = Math.floor((con-10)/2)

    // Display modifier
    conModHTML.innerHTML = `Con mod: ${conMod}`;      
};

const calculateWisMod = () => {
    // Get the values of the attributes
    const wis = document.getElementById("wisdom-txt").value;
    
    // Get the HTML element to display
    const wisModHTML = document.getElementById("wis-mod");

    // Calculates the modifier
    const wisMod = Math.floor((wis-10)/2)

    // Display modifier
    wisModHTML.innerHTML = `Wis mod: ${wisMod}`;      
};

const calculateIntMod = () => {
    // Get the values of the attributes
    const int = document.getElementById("intelligence-txt").value;
    
    // Get the HTML element to display
    const intModHTML = document.getElementById("int-mod");

    // Calculates the modifier
    const intMod = Math.floor((int-10)/2)

    // Display modifier
    intModHTML.innerHTML = `Int mod: ${intMod}`;      
};

const calculateChaMod = () => {
    // Get the values of the attributes
    const cha = document.getElementById("charisma-txt").value;
    
    // Get the HTML element to display
    const chaModHTML = document.getElementById("cha-mod");

    // Calculates the modifier
    const chaMod = Math.floor((cha-10)/2)

    // Display modifier
    chaModHTML.innerHTML = `Cha mod: ${chaMod}`;      
};

const calculateProfBonus = () => {
    const charLevel = document.getElementById("character-level-txt").value;
    const profBonus = document.getElementById("prof-bonus");

    if (charLevel<5) {
        profBonus.innerHTML = "+2";
    }
    else if (charLevel<9) {
        profBonus.innerHTML = "+3";
    }
    else if (charLevel<13) {
        profBonus.innerHTML = "+4";
    }
    else if (charLevel<17) {
        profBonus.innerHTML = "+5";
    }
    else {
        profBonus.innerHTML = "+6";
    }
};

/* Premade characters */
const elara = () => {
    /* Selectors */
    const characterName = document.getElementById("character-name-txt");
    const characterRace = document.getElementById("character-race");
    const charaClass = document.getElementById("character-class");
    const str = document.getElementById("strength-txt");
    const dex = document.getElementById("dexerity-txt");
    const con = document.getElementById("constitution-txt");
    const wis = document.getElementById("wisdom-txt");
    const int = document.getElementById("intelligence-txt");
    const cha = document.getElementById("charisma-txt");

    /* Sets the name of the character */
    characterName.value = "Elara";

    /* Set the value of "character-race" to "elf" */
    characterRace.value = "elf";

    /* Dispatch the "change" event on the "character-race" element */
    const eventRace = new Event("change");
    characterRace.dispatchEvent(eventRace);

    /* Set the value of the attributes */
    str.value = "8";
    dex.value = "12";
    con.value = "10";
    int.value = "15";
    wis.value = "13";
    cha.value = "14";

    /* Dispatch the "change" event on the attribute elements */
    const eventStr = new Event("change");
    str.dispatchEvent(eventStr);
    const eventDex = new Event("change");
    dex.dispatchEvent(eventDex);
    const eventCon = new Event("change");
    con.dispatchEvent(eventCon);
    const eventWis = new Event("change");
    wis.dispatchEvent(eventWis);
    const eventInt = new Event("change");
    int.dispatchEvent(eventInt);
    const eventCha = new Event("change");
    cha.dispatchEvent(eventCha);

    /* Sets the class */
    charaClass.value = "wizard";

    /* Dispatch the "change" event on the "charaClass" element */
    /* function not yet implemented */

    /* Sets the Skill proficiencies */

    /* Shows character creator if it was closed */
    document.getElementById("character-creator").classList.remove("hidden");
};



window.onload = () => {
    document.getElementById("create-character").onclick = showOrHideCharacterCreator;
    document.getElementById("manage-character").onclick = showOrHideCharacterManager;
    document.getElementById("character-race").onchange = determineSubRaces;

    // Calculate modifier functions
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

    // Selecting characters
    document.getElementById("elara").onclick = elara;
    document.getElementById("thrain").onclick = elara;
    document.getElementById("sylas").onclick = elara;
    document.getElementById("aria").onclick = elara;
    document.getElementById("drakar").onclick = elara;
};