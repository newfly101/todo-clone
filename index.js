let addTodo = document.querySelector(".new-todo");

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

// event bubbling
// checked => change
document.body.onchange = (e) => {
    // console.log(e.target);
    if (e.target.type === 'checkbox') {
        if (e.target.checked) {
            e.target.nextElementSibling.style.textDecorationLine = "line-through";
            e.target.parentElement.style.opacity = "0.6";
        } else {
            e.target.nextElementSibling.style.textDecorationLine = '';
            e.target.parentElement.style.opacity = "1";
        }
    }
};

document.body.onclick = (e) => {
    // checkbox onclick 방지
    if (e.target.type === 'checkbox') return;
    // console.log(e.target);

    // ** tagName 은 대문자로 표기
    if (e.target.tagName === 'IMG') {
        if (e.target.alt === 'modify') {
            e.target.previousElementSibling.focus();
        }
        if (e.target.alt === 'delete') {
            e.target.parentElement.remove();
        }
    }
};

document.body.onkeyup = (e) => {
    if (e.target.type === 'text') {
        if (e.code === 'Enter') {
            // const inputValue = e.target.value;
            // console.log(`저장된 값 : ${inputValue}`);
            e.target.blur();
        }
    }

}
