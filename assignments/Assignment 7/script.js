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

    const name2 = document.getElementById("name-2-txt").value;
    const age2 = parseInt(document.getElementById("age-2-txt").value);

    const name3 = document.getElementById("name-3-txt").value;
    const age3 = parseInt(document.getElementById("age-3-txt").value);

    var highest, median, lowest, eldest, middle, youngest;

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
    orderedAges.innerHTML = `<section> From oldest to youngest: ${eldest} at ${highest} years old, ${middle} at ${median} years old, and ${youngest} at ${lowest} years old<section>`;
};

const displayFunraising = () => {
    const funraisingAmount = parseInt(document.getElementById("fund-raising-txt").value);
    const error = document.getElementById("fund-raising-error");

    if (funraisingAmount < 1) {
        error.innerHTML = "Please enter a number greater than 1.";
    }
    else if (funraisingAmount > 10000) {
        error.innerHTML = "Please enter an number up to 10,000.";
    }
    else {
        error.innerHTML = "Please enter a number.";
    }

};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    document.getElementById("exercise-1-link").onclick = toggleExercise1;
    document.getElementById("exercise-2-link").onclick = toggleExercise2;
    document.getElementById("age-compare-button").onclick = compareAges;
    document.getElementById("display-button").onclick = displayFunraising;
};