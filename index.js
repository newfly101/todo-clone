let addTodo = document.querySelector(".new-todo");
let checked = document.querySelector("input[type='checkbox']");
checked.addEventListener("change", function (e) {
    console.log(e.target.checked);
    if (e.target.checked) {
        checked.nextElementSibling.style.textDecorationLine ="line-through";
        // console.log(checked.nextElementSibling);
    } else {
        checked.nextElementSibling.style.textDecorationLine = '';
    }
})

addTodo.addEventListener("click", (e) => {
    e.preventDefault();

    let newTodo = document.createElement('div');
    newTodo.classList.add("add-todos");

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.className = 'todo';

    let modifyImg = document.createElement('img');
    modifyImg.src = 'assets/modify.svg';
    modifyImg.alt = 'modify';

    let deleteImg = document.createElement('img');
    deleteImg.src = 'assets/delete.svg';
    deleteImg.alt = 'delete';

    // Append the elements to the newTodo div
    newTodo.appendChild(checkbox);
    newTodo.appendChild(todoInput);
    newTodo.appendChild(modifyImg);
    newTodo.appendChild(deleteImg);

    // Append the newTodo to the body (or any other container)
    document.body.appendChild(newTodo);
});


