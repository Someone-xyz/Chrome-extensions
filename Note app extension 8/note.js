const text = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const displayNotes = document.getElementById("displayNotes");
 
// localStorage se notes lao
let saveArr = JSON.parse(localStorage.getItem("note")) || [];

// function note display karne ke liye
function showNotes() {
    displayNotes.innerHTML = "";

    saveArr.forEach((item, index) => {

        // note div
        let divElement = document.createElement("div");
        divElement.innerText = item;
        divElement.classList.add("note");

        // delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        deleteButton.style.background = "red";
        deleteButton.style.color = "white";
        deleteButton.style.marginLeft = "10px";

        // delete event
        deleteButton.addEventListener("click", () => {

            // array se delete
            saveArr.splice(index, 1);

            // localStorage update
            localStorage.setItem("note", JSON.stringify(saveArr));
 
            // screen refresh
            showNotes();
        });

        divElement.appendChild(deleteButton);
        displayNotes.appendChild(divElement);
    }); 
}

// page load par notes show karo
showNotes();

// save button
saveBtn.addEventListener("click", () => {

    if (text.value.trim() === "") {
        alert("Please enter some text to save.");
        return;
    }

    // array me add
    saveArr.push(text.value);

    // localStorage me save
    localStorage.setItem("note", JSON.stringify(saveArr));

    // notes refresh
    showNotes();

    // textarea clear
    text.value = "";
});