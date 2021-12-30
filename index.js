let name1 = document.querySelector("#your-name");

function getNumberOfChars(name1) {
    return name1.length
}

function getLower(name1) {
    return name1.toLowerCase()
}

function getUpper(name1) {
    return name1.toUpperCase()
}

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");


name1.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name1.value);
    answer2.textContent = getLower(name1.value);
    answer3.textContent = getUpper(name1.value);
});
