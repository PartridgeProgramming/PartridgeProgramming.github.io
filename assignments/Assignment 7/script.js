const toggleHamburger = () => {
    document.getElementById("exercises").classList.toggle("exercise-hide");
};

const toggleExercise1 = () => {
    document.getElementById("exercise-1-main").classList.toggle("hidden");
    if (!document.getElementById("exercise-2-main").classList.contains("hidden")) {
        document.getElementById("exercise-2-main").classList.toggle("hidden");
    }
};

const toggleExercise2 = () => {
    document.getElementById("exercise-2-main").classList.toggle("hidden");
    if (!document.getElementById("exercise-1-main").classList.contains("hidden")) {
        document.getElementById("exercise-1-main").classList.toggle("hidden");
    }
};

const compareAges = () => {
    const orderedAges = document.getElementById("orderedAges");

    const name1 = document.getElementById("name-1-txt").value;
    const age1 = parseInt(document.getElementById("age-1-txt").value);
    const error1 = document.getElementById("exercise-1-error-1");

    const name2 = document.getElementById("name-2-txt").value;
    const age2 = parseInt(document.getElementById("age-2-txt").value);
    const error2 = document.getElementById("exercise-1-error-2");

    const name3 = document.getElementById("name-3-txt").value;
    const age3 = parseInt(document.getElementById("age-3-txt").value);
    const error3 = document.getElementById("exercise-1-error-3");

    var highest, median, lowest, eldest, middle, youngest;

    // Setup
    orderedAges.classList.add("hidden");
    error1.classList.add("hidden");
    error2.classList.add("hidden");
    error3.classList.add("hidden");

    // Error checking
    if (isNaN(age1)) {
        error1.classList.remove("hidden");
        error1.innerHTML="Please enter a number for the age.";
    }
    else if (isNaN(age2)) {
        error2.classList.remove("hidden");
        error2.innerHTML="Please enter a number for the age.";
    }
    else if (isNaN(age3)) {
        error3.classList.remove("hidden");
        error3.innerHTML="Please enter a number for the age.";
    }
    // No errors, continue on
    else {
        // Sort through the ages and order them
        // Age 1 is largest
        if (age1 >= age2 && age1 >= age3) {
            highest = age1;
            eldest = name1;
                // Age 2 is second
                if (age2 >= age3) {
                    // ages
                    median = age2;
                    lowest = age3;
                    // order
                    middle = name2;
                    youngest = name3;
            } 
                // Age 3 is second
                else {
                    // ages
                    median = age3;
                    lowest = age2;
                    // order
                    middle = name3;
                    youngest = name2;
            }
        // Age 2 is largest
        } else if (age2 >= age1 && age2 >= age3) {
            highest = age2;
            eldest = name2;
            // Age 1 is second
            if (age1 >= age3) {
                // ages
                median = age1;
                lowest = age3;
                // order
                middle = name1;
                youngest = name3;
            } 
            // Age 3 is second
                else {
                    // ages
                    median = age3;
                    lowest = age1;
                    // order
                    middle = name3;
                    youngest = name1;
                }
        } 
        // Age 3 is largest
        else {
            highest = age3;
            eldest = name3;
            // Age 1 is second
            if (age1 >= age2) {
                // ages
                median = age1;
                lowest = age2;
                // order
                middle = name1;
                youngest = name2;
            } 
            // Age 2 is second
                else {
                    // ages
                    median = age2;
                    lowest = age1;
                    // order
                    middle = name2;
                    youngest = name1;
                }
            }  
        orderedAges.classList.remove("hidden");
        orderedAges.innerHTML = `<section> From oldest to youngest: ${eldest} at ${highest} years old, 
        ${middle} at ${median} years old, and ${youngest} at ${lowest} years old<section>`;
    }
};

const displayFunraising = () => {
    // Consts
    const funraisingAmount = parseInt(document.getElementById("fund-raising-txt").value);
    const funraisingBox = document.getElementById("box");
    const error = document.getElementById("fund-raising-error");
    const root = document.querySelector(":root");

    // Math for to find percentage
    const funraisingGoal = (funraisingAmount/10000)*100;
    console.log(funraisingGoal);

    // Error checking
    if (funraisingAmount < 1) {
        error.innerHTML = "Please enter a number greater than 1.";
    }

    else if (funraisingAmount > 10000) {
        error.innerHTML = "Please enter an number up to 10,000.";
    }

    else if (isNaN(funraisingAmount)) {
        error.innerHTML = "Please enter a number.";
    }

    // No errors, continue on
    else {
        if (funraisingGoal < 25) {
            console.log("Under 25%");
        }
        else if ((funraisingGoal >= 25)&&!(funraisingGoal > 49)) {
            console.log("Between 25 and 50%");
            root.style.setProperty("--box-empty", "75%");
        }
        else if ((funraisingGoal >= 50)&&!(funraisingGoal > 74)) {
            console.log("Between 50 and 75%");
            root.style.setProperty("--box-empty", "50%");
        }
        else if ((funraisingGoal >= 75)&&!(funraisingGoal > 99)){
            console.log("Between 75 and 10%");
            root.style.setProperty("--box-empty", "25%");
        }
        else {
            console.log("At 100%");
            root.style.setProperty("--box-empty", "0%");
        }
    }
    funraisingBox.classList.add("filled-box");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    document.getElementById("exercise-1-link").onclick = toggleExercise1;
    document.getElementById("exercise-2-link").onclick = toggleExercise2;
    document.getElementById("age-compare-button").onclick = compareAges;
    document.getElementById("display-button").onclick = displayFunraising;
};