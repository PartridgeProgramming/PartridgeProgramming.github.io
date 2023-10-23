/* Premade characters */
const elara = () => {
    /* Shows character creator if it was closed */
    if (document.getElementById("character-creator").classList.contains("hidden")) {
        document.getElementById("character-creator").classList.remove("hidden");
    }

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
    
};