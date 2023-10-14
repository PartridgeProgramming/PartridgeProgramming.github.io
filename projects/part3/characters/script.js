const showOrHideCharacterCreator = () => {
    document.getElementById("character-creator").classList.remove("hidden");
};

window.onload = () => {
    document.getElementById("create-character").onclick = showOrHideCharacterCreator;
    //From common-script
    document.getElementById("nav").onclick = showOrHide;
};