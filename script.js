let un = document.getElementById('un')
let deux = document.getElementById('deux')
let trois = document.getElementById('trois')
let quatre = document.getElementById('quatre')
let cinq = document.getElementById('cinq')
let six = document.getElementById('six')
let sept = document.getElementById('sept')
let huit = document.getElementById('huit')
let neuf = document.getElementById('neuf')
let dix = document.getElementById('dix')

let btn1 = document.getElementById('1')

let spans = document.querySelectorAll("span")
let para = document.querySelector('p')
let bouttons = document.querySelectorAll("button")

const uns = () => {
    un.addEventListener("dragover", (e) => {
        e.preventDefault()
        para.innerHTML = "";
    })

    un.addEventListener("drop", (e) => {
        e.preventDefault()
        let btn = e.dataTransfer.setData('text/plain', null);
        showBtn()
    })

    un.addEventListener('')

};
uns()

for (const boutton of bouttons) {

}


const showBtn = () => {
    un.innerHTML = `
    <button id="1">9</button>
    `;
}