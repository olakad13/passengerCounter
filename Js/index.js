let count = 0;
let counter = document.getElementById("counter");
let PreEntries = document.getElementById("previous-entry");

function increment() {
    count += 1;
    counter.innerText = count;
}

function save() {
    PreEntries.textContent += count + " - "
    count = 0;
    counter.innerText = count;
}