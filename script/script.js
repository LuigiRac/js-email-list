"use strict"
console.clear();

const extration = document.getElementById("mailGenerate");
const button = document.querySelector("button");
const listUl = document.getElementById("mail-list");
let arrayMail = [];
button.addEventListener("click", getMail);

function getMail() {
    for (let i = 0; i < 10; i++) {
        arrayMail = [];
        listUl.innerHTML = "";
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                // console.log(res.data.response);
                arrayMail.push(res.data.response);
                if (arrayMail.length === 10) {
                    printMail(arrayMail)

                }
                console.log(arrayMail);

            })
    }

}


function printMail(arMail) {
    console.log(arMail);

    // let mailList = '';
    arrayMail.forEach((mail) => {
        let mailList = document.createElement("li");
        mailList.innerHTML = mail;
        // mailList += `<li>${mail}</li>`
        listUl.appendChild(mailList);

        console.log(listUl);
    });

}
// console.log(getMail());


