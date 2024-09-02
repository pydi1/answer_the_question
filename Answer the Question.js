let questionsFormEl = document.getElementById("questionsForm");

let resultMsgEl = document.getElementById("resultMsg");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
const Answer = "Delhi";

let option = "";
cityHyderabadEl.addEventListener("change", function(event) {
    console.log(event.target.value);
    option = event.target.value;
});
cityChennaiEl.addEventListener("change", function(event) {
    console.log(event.target.value);
    option = event.target.value;
});
cityDelhiEl.addEventListener("change", function(event) {
    console.log(event.target.value);
    option = event.target.value;
});
cityMumbaiEl.addEventListener("change", function(event) {
    console.log(event.target.value);
    option = event.target.value;
});
let validate = function() {
    event.preventDefault();
    if (option === "") {
        resultMsgEl.textContent = "Please select the answer.";
    } else if (option !== Answer) {
        resultMsgEl.classList.add("wrongpar");
        resultMsgEl.textContent = "Wrong answer";
    } else if (option === Answer) {
        resultMsgEl.classList.add("rightpar");
        resultMsgEl.textContent = "Correct answer.";

    }
}
questionsFormEl.addEventListener("submit", validate);