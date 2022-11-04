let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    //Esercizio 13
    let saves = count + " - "
    saveEl.textContent += saves
    //textContent al contrario di innerText salva lo spazio
    countEl.textContent = 0
    count = 0
}