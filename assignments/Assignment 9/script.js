const cycleQuotes = () => {
    const quotes = document.getElementById("quotes");

    let count = 0;
    const interval = setInterval(() => {
        const quotesList = ["\"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.\" - Frank Herbert, Dune",
        "\"There are decades where nothing happens; and there are weeks where decades happen. - Vladimir Ulyanov", "\"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\" - Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches", 
        "\"I believe in only one thing, the power of human will.\" - Ioseb Jughashvili",
        "\"It is difficult for me to imagine what \"personal liberty\" is enjoyed by an unemployed person, who goes about hungry, and cannot find employment. Real liberty can exist only where exploitation has been abolished, where there is no oppression of some by others, where there is no unemployment and poverty, where a man is not haunted by the fear of being tomorrow deprived of work, of home and of bread. Only in such a society is real, and not paper, personal and every other liberty possible.\" - Ioseb Jughashvili",
        "\Can a nation be free if it oppresses other nations? It cannot.\" - Vladimir Ulyanov"];
        if (count >= quotesList.length) {
            count = 0;
        }
        quotes.innerHTML = `<p>${quotesList[count]}</p>`;
        count++;
    },2000);
};

const drawRainbow = () => {
    const rainbowContainer = document.getElementById("rainbow-container");

    //const rainbowStripe = document.querySelectorAll('.rainbow-stripe');
    // The colors are: red, orange, yellow, green, blue, indigo, and violet in that order
    const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

    let count = 1;
    const interval = setInterval(() => {
        const rainbowStripe = document.querySelector(
            `#rainbow-container :nth-child(${count})`
        );
        rainbowStripe.style.borderColor = rainbowColors[count-1];
        rainbowStripe.classList.remove("visibility-hidden");
        count++;
        let nextStripe = rainbowStripe.nextElementSibling;
    
        if (nextStripe == null) {
            clearInterval(interval);
            setTimeout(() => {
                rainbowContainer.innerHTML += `<img src="images/ClipartKey_607297.png" width="100" height="150">`;
            },1000);
        }
    },1000);
};

window.onload = () => {
    cycleQuotes();
    document.getElementById("rainbow-button").onclick = drawRainbow;
};