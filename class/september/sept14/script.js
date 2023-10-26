/* Template JavaScript file */
//const add = (a, b) => { return a+b };

//console.log(add(5, 6));

//const square = a => a * a;
//const square = (a) => a * a;

//console.log(square(5));

//const hello = () => console.log("Hello me!");

//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!");

//helloSpecific("Portia");
/*
const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log("You are awesome!");
};

helloFullName("portia", "plante");
*/
/* Not ok to change a constant
const myName = "Portia";
myName = "Sally";
*/

//const myFunct = () => console.log("Hey you!");

const startAnimatation = () => {
    document.getElementById("square").classList.add("animated");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("button-begin").onclick = startAnimatation;
    document.getElementById("button-show-name").onclick = displayName;
}