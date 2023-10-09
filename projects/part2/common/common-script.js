/* Credit for this script goes to w3schools. */
/* Show/hide top nav */
const showOrHide = () => {
    let links = document.getElementById("links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
};

