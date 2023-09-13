const showImage = () => {
    document.getElementById("image").classList.remove("hide");
}

const hideImage = () => {
    document.getElementById("image").classList.add("hide");
}

const addComment = () => {
    document.getElementsByClassName("comment").value="";
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showImage;
    document.getElementById("button-hide").onclick = hideImage;
    document.getElementById("button-comment").onclick = addComment;
}