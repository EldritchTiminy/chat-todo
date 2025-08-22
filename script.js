// Html elements
let tList = document.querySelector("#tList"); 
let adBtn = document.querySelector("#addButton");
let tInp = document.querySelector("#taskInput");
let tCounter = document.querySelector("#tCounter");

// Function: retrieving text input value
function inpGet () {
    //console.log(tInp.value);
    return tInp.value;
}

// Function: clear text input
function clrInp () {
    tInp.value = "";
}

// Function: adding input to list
function addInp () {
    let taskInput = inpGet();
    let newTask = document.createElement("li");
    newTask.innerHTML = `<span class='tText'>${taskInput}</span>`;
    newTask.setAttribute("class", "incomplete");
    newTask.appendChild(addDltBtn());
    newTask.appendChild(addCptBtn());
    tList.appendChild(newTask);
    counterPlus();
    clrInp();
}

// Function: add delete button
function addDltBtn () {
    let dltBtn = document.createElement("button");
    dltBtn.setAttribute("class", "dltBtn");
    dltBtn.textContent = "Delete";
    dltBtn.addEventListener("click", dltParent);
    return dltBtn;
}

// Function: Delete parent element
function dltParent (event) {
    counterMinu();
    event.target.parentElement.remove();
}

// Function: add complete button
function addCptBtn () {
    let cptBtn = document.createElement("button");
    cptBtn.setAttribute("class", "cptBtn");
    cptBtn.textContent = "Complete";
    cptBtn.addEventListener("click", toggleCpt);
    return cptBtn;
}

// Function: change css class
function toggleCpt (event) {
    if (event.target.parentElement.getAttribute("class") === "incomplete") {
        event.target.parentElement.setAttribute("class", "complete");
        event.target.textContent = "Incomplete";
    } else {
        event.target.parentElement.setAttribute("class", "incomplete");
        event.target.textContent = "Complete";
    };
}

// Function: increment task counter
function counterPlus () {
    let currentCount = Number(tCounter.textContent);
    currentCount++;
    tCounter.textContent = currentCount;
}

// Function: decrement task counter
function counterMinu () {
    let currentCount = Number(tCounter.textContent);
    currentCount--;
    tCounter.textContent = currentCount;
}

// Event Listeners
adBtn.addEventListener("click", addInp);
tInp.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});