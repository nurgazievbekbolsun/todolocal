//     Объекты хранилища localStorage и sessionStorage
//     предоставляют одинаковые методы и свойства:
//     setItem(key, value) – сохранить пару ключ/значение.
//     getItem(key) – получить данные по ключу key.
//     removeItem(key) – удалить данные с ключом key.
//     clear() – удалить всё.
//     key(index) – получить ключ на заданной позиции.
//     length – количество элементов в хранилище.

const inputImg = document.querySelector(".input");
const imgName = document.querySelector(".input2");
const table = document.querySelector("#tbody");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
function view() {
    const task = JSON.parse(localStorage.getItem("task")) || [];
    task.map((el) => {
        table.innerHTML += `
    <tr class='text-center'>
      <td> <img style='width: 100px;' src='${el.img}'/></td>
      <td>${el.title}</td>
      <td><button class='del-btn btn btn-danger'>Delete</button></td>
    </tr>`;
    });
    delBtn();
}
view();
inputImg.addEventListener('click', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})
imgName.addEventListener('click', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})
function addTask() {
    if (imgName.value === '' || inputImg.value=== '' ) {
        alert('404')
    }else{
        table.innerHTML = ''
        const task = JSON.parse(localStorage.getItem("task")) || [];
        const newTask = {
            id: task.length ? task[task.length - 1].id + 1 : 1,
            img: (img.src = inputImg.value),
            title: imgName.value,
        };
        const result = [...task, newTask];
        localStorage.setItem("task", JSON.stringify(result));
        view();
        imgName.value = "";
        inputImg.value = "";
        img.src = "";
    }
}
btn.addEventListener("click",() => {
    addTask()
});

function delBtn() {
    let task = JSON.parse(localStorage.getItem("task")) || [];
    const buttons = document.querySelectorAll(".del-btn");
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            task = task.filter((el, idx) => {
                return idx !== index;
            });
            localStorage.setItem("task", JSON.stringify(task));
            table.innerHTML = "";
            view();
        });
    });
}

delBtn();






