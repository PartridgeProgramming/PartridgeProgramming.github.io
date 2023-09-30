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

        // Math to get percentage of how much to fill
        let boxFillAmount = 100-funraisingGoal;

        // Ensure the boxFillAmount is not negative
        boxFillAmount = Math.max(boxFillAmount, 0);

        console.log("boxFillAmount = " + boxFillAmount);
        console.log("The amounts given fills in: " + funraisingGoal + "%");

        // CSS update
        root.style.setProperty("--box-empty", boxFillAmount + "%");
        funraisingBox.classList.add("filled-box");
        error.innerHTML = ""; // Clear any previous error messages
    }    
};
const startManRunning = () => {
    const root = document.querySelector(":root");
    document.getElementById("man").src="stick-man-running.svg";

    let count = 0;
    const interval = setInterval(() => {
        console.log("count=" + count);
        root.style.setProperty("--man-left-margin", count + "vi");
        count++;

        if (count == 30) {
            clearInterval(interval);
        }
    },100);
    
};

window.onload = () => {
    document.getElementById("display-button").onclick = displayFunraising;
    document.getElementById("man").onclick = startManRunning;
};