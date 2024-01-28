let dot = 0;

let value = document.getElementById("count");
let saveEl = document.getElementById("save-el");
function increment(){
    value.innerHTML = ++dot;
}
function decrement(){
    value.innerHTML = --dot;
}
function reset(){
    value.innerHTML = 0;
}


function save(){
    
    console.log(dot);
    let ans = dot+"-";
    saveEl.textContent = saveEl.textContent + ans;
}


