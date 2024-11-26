let addTodo = document.querySelector(".new-todo");
let checked = document.querySelector("input[type='checkbox']");


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

// 체크되면 취소선 긋기 + 배경화면 색상 흐려지기
checked.addEventListener("change", function (e) {
    // console.log(e.target.checked);
    if (e.target.checked) {
        e.target.nextElementSibling.style.textDecorationLine ="line-through";
        e.target.parentElement.style.opacity = "0.6";
    } else {
        checked.nextElementSibling.style.textDecorationLine = '';
        e.target.parentElement.style.opacity = "1";
    }
})

