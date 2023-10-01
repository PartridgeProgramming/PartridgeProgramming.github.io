const displayFunraising = () => {
    // Consts
    const funraisingAmount = parseFloat(document.getElementById("fund-raising-txt").value);
    const funraisingBox = document.getElementById("box");
    const error = document.getElementById("fund-raising-error");
    const root = document.querySelector(":root");

    // Error checking
    if (funraisingAmount < 1) {
        error.innerHTML = "Please enter a number greater than or equal to 1.";
    }

    else if (funraisingAmount > 10000) {
        error.innerHTML = "Please enter an number up to 10,000.";
    }

    else if (isNaN(funraisingAmount)) {
        error.innerHTML = "Please enter a number.";
    }

    // No errors, continue on
    else {
        // Math for to find percentage
        const funraisingGoal = (funraisingAmount/10000)*100;

        // CSS update
        let count = 0;
        const interval = setInterval(() => {
            root.style.setProperty("--box-empty", count + "%");
            if (count >= funraisingGoal) {
                clearInterval(interval);
                funraisingBox.classList.add("filled-box");
                error.innerHTML = ""; // Clear any previous error messages
            }
            count++;
        },25);
    }    
};
const startManRunning = () => {
    const root = document.querySelector(":root");
    document.getElementById("man").src="stick-man-running.svg";

    let count = 0;
    const interval = setInterval(() => {
        root.style.setProperty("--man-left-margin", count + "vi");
        count++;

        if (count == 30) {
            clearInterval(interval);
            document.getElementById("man").src="stick-man-walking.svg";
        }
    },100);
    
};

window.onload = () => {
    document.getElementById("display-button").onclick = displayFunraising;
    document.getElementById("man").onclick = startManRunning;
};