document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {

                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList();
            todoInput.value = "";
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
    }
    

    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});