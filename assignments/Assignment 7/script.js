const toggleExercises = () => {
    document.getElementById("exercises").classList.toggle("exercise-hide");
};

const compareAges = () => {
    const orderedAges = document.getElementById("orderedAges");

    const name1 = document.getElementById("name-1-txt");
    const age1 = document.getElementById("age-1-txt");

    const name2 = document.getElementById("name-2-txt");
    const age2 = document.getElementById("age-2-txt");

    const name3 = document.getElementById("name-3-txt");
    const age3 = document.getElementById("age-3-txt");

    //orderedAges.innerHTML = '<section>'
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleExercises;

};