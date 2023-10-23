
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
