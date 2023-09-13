const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi, to you Portia.";
    helloP.classList.add("special");
}

const showImage = () => {
    document.getElementById("image").classList.remove("hide");
}

const hideImage = () => {
    document.getElementById("image").classList.add("hide");
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showImage;
    document.getElementById("button-hide").onclick = hideImage;
}