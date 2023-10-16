/* Credit for this script goes to w3schools. */
/* Show/hide top nav */
const showOrHide = () => {
    let links = document.getElementById("links");
    if ((links.style.display === "block")&&(screen.width >= 480)) {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
};

