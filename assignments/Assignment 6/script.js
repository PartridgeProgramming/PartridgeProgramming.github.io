const showImage = () => {
    document.getElementById("image").classList.remove("hide");
}

const hideImage = () => {
    document.getElementById("image").classList.add("hide");
}

const commenting = () => {
    const addComment = document.getElementById("comments");

    // Creating elements
    const commentPara = document.createElement("p");
    const commentH3 = document.createElement("h3");
    
    // Set heading for comment
    commentH3.appendChild(document.createTextNode(document.getElementById("product-name-txt").value));
    
    // Body and formatting of comment
    commentPara.appendChild(document.createTextNode(document.getElementById("rating-txt").value + "/5 stars "));
    commentPara.appendChild(document.createTextNode(document.getElementById("comment-txt").value));
    commentPara.appendChild(document.createElement("br")); // Add another line break
    commentPara.appendChild(document.createTextNode("by " + document.getElementById("user-name-txt").value));

    // Adding in the formatted comment
    addComment.appendChild(commentH3);
    addComment.appendChild(commentPara);

    // Clear input fields
    document.getElementById("product-name-txt").value = "";
    document.getElementById("comment-txt").value = "";
    document.getElementById("rating-txt").value = "";
    document.getElementById("user-name-txt").value = "";
}

const makeDance = () => {
    document.getElementById("heart").classList.add("dancing");
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showImage;
    document.getElementById("button-hide").onclick = hideImage;
    document.getElementById("button-dance").onclick = makeDance;
    document.getElementById("button-comment").onclick = commenting;
}