function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "hello") {
      document.getElementById("content").style.display = "block";
      document.getElementById("passwordForm").style.display = "none";
    }
    else{
        alert("Геть з відси розбійник")
    }
  }
document.addEventListener('DOMContentLoaded', function() {
    // Получение сохраненных пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Функция для добавления пользователя в таблицу
    function addUserToTable(username, password) {
      let table = document.getElementById('user-table');
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = username;
      cell2.innerHTML = password;
    }

    // Добавление всех сохраненных пользователей в таблицу
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      addUserToTable(user.username, user.password);
    }
  });