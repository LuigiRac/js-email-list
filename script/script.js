"use strict"
console.clear();

const extration = document.getElementById("mailGenerate");
const button = document.querySelector("button");


button.addEventListener("click", getMail);

function getMail() {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
            console.log(res.data.response);
            extration.innerHTML = res.data.response
        });
}
