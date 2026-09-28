const headingInp = document.getElementById('headingInp');
const todoTextInp = document.getElementById('todoTextInp');
const todoContent = document.getElementById('todoContent');
const addBtn = document.getElementById('addBtn');

let todoArr = [];

// Load todos from localStorage
if (localStorage.getItem('todos') !== null) {
    todoArr = JSON.parse(localStorage.getItem('todos'));
}

// Render on page load
renderTodos();

// Render Function
function renderTodos() {

    todoContent.innerHTML = '';

    todoArr.forEach((todo, index) => {

        // Main Card Div
        let divElem = document.createElement('div');
        divElem.classList.add('todoCard');

        // Heading
        let heading = document.createElement('h3');
        heading.innerText = todo.heading;

        // Todo Text
        let para = document.createElement('p');
        para.innerText = todo.todoText;

        // Delete Button
        let delBtn = document.createElement('button');
        delBtn.innerText = "Delete";
        delBtn.classList.add('deleteBtn');

        delBtn.addEventListener('click', () => {

            todoArr.splice(index, 1);

            localStorage.setItem('todos', JSON.stringify(todoArr));

            renderTodos();
        });

        // Update Button
        let updateBtn = document.createElement('button');
        updateBtn.innerText = "Update";
        updateBtn.classList.add('updateBtn');

        updateBtn.addEventListener('click', () => {

            let updatedHeading = prompt(
                "Enter Updated Heading",
                todo.heading
            );

            let updatedText = prompt(
                "Enter Updated Todo Text",
                todo.todoText
            );

            // If user clicks cancel
            if (updatedHeading === null || updatedText === null) {
                return;
            }

            // Empty check
            if (updatedHeading.trim() === "" || updatedText.trim() === "") {
                alert("Inputs cannot be empty");
                return;
            }

            // Update values
            todoArr[index].heading = updatedHeading;
            todoArr[index].todoText = updatedText;

            // Save updated array
            localStorage.setItem('todos', JSON.stringify(todoArr));

            // Re-render
            renderTodos();

        });

        // Buttons Wrapper
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('btns');

        btnDiv.appendChild(delBtn);
        btnDiv.appendChild(updateBtn);

        // Append all in card
        divElem.appendChild(heading);
        divElem.appendChild(para);
        divElem.appendChild(btnDiv);

        // Append card on screen
        todoContent.appendChild(divElem);

    });
}

// Add Todo
addBtn.addEventListener('click', () => {

    if (headingInp.value.trim() === "" || todoTextInp.value.trim() === "") {

        alert("Please fill all inputs");

        return;
    }

    let todoObj = {
        heading: headingInp.value,
        todoText: todoTextInp.value
    };

    // Push in array
    todoArr.push(todoObj);

    // Save in localStorage
    localStorage.setItem('todos', JSON.stringify(todoArr));

    // Re-render
    renderTodos();

    // Clear Inputs
    headingInp.value = "";
    todoTextInp.value = "";

});