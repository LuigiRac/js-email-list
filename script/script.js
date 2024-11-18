"use strict"
console.clear();

const extration = document.getElementById("mailGenerate");
const button = document.querySelector("button");

axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
        console.log(res.data);

    });