// Get references to elements
const addButton = document.getElementById('add');
const taskInput = document.getElementById('task-enter');
const taskList = document.getElementById('task-list');
const inbox = document.querySelector(".calender")

document.querySelector(".input-area").addEventListener("submit", function (e) {
     e.preventDefault();

     const taskText = taskInput.value.trim();
     if (taskText === '') return;










     const listItem = document.createElement("li");

     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.addEventListener('change', () => {
          listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
     });



     listItem.appendChild(checkbox);
     taskList.appendChild(listItem);
     listItem.appendChild(document.createTextNode(' ' + taskText));

     taskInput.value = '';

});

inbox.addEventListener("click", function () {
     window.location.href = 'calender.html';
});

