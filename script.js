document.addEventListener('DOMContentLoaded', function() {
    let loginButton = document.querySelector('.login-button1');
    let modal = document.getElementById('modal');
    let closeButton = document.querySelector('.close');

    loginButton.addEventListener('click', function() {
      modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
    document.getElementById('registration-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      let usernameInput = document.querySelector('.username');
      let passwordInput = document.querySelector('.password');
      let username = usernameInput.value;
      let password = passwordInput.value;

      if (username.length < 6) {
        alert("Имя пользователя должно содержать не менее 6 символов");
        return;
      }

      if (!username.includes('@')) {
        alert("Имя пользователя должно содержать символ '@'");
        return;
      }

      if (password.length < 8) {
        alert("Пароль должен содержать не менее 8 символов");
        return;
      }
      let user = { username: username, password: password };

      let users = JSON.parse(localStorage.getItem('users')) || [];

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      alert("Регистрация прошла успешно!");
      modal.style.display = 'none';
    });
  });

  let likeButton = document.querySelector('.V_button1'); 
let likeCount = document.querySelector('.likeCount');
let count = 0; 
likeButton.addEventListener('click', function() {
      count++;
      likeCount.textContent = count.toString();
     });



     let likeButton2 = document.querySelector('.V_button2'); 
     let likeCount2 = document.querySelector('.likeCount2');
     let count2 = 0; 
     likeButton2.addEventListener('click', function() {
           count++;
           likeCount2.textContent = count.toString();
          });

          let likeButton3 = document.querySelector('.V_button3'); 
          let likeCount3 = document.querySelector('.likeCount3');
          let count3 = 0; 
          likeButton3.addEventListener('click', function() {
                count++;
                likeCount3.textContent = count.toString();
               });
     






const cards = document.querySelectorAll('.Dcard');

cards.forEach(function(card) {
const photo = card.querySelector('img');
const yellowBlock = card.querySelector('.Dyellow-block');

photo.addEventListener('click', function() {
    yellowBlock.classList.toggle('active');
});
});

function змінитиТекст() {
  var блок = document.getElementById("блок");
  if (блок.innerHTML === "Follow") {
      блок.innerHTML = "Following";
      блок.classList.add("клікнутий");
  } else {
      блок.innerHTML = "Follow";
      блок.classList.remove("клікнутий");
  }
}

document.querySelector('.m_but').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let usernameInput = document.querySelector('.m_plch');
  let username = usernameInput.value;

  if (username.length < 6) {
    alert("Имя пользователя должно содержать не менее 6 символов");
    return;
  }

  if (!username.includes('@gmail.com')) {
    alert("Имя пользователя должно содержать символ '@gmail.com'");
    return;
  }
  alert("Регистрация прошла успешно!");
});

function generateRandomNumber() {
  let resultBlock = document.getElementById("resultBlock");

  let randomNumber = Math.floor(Math.random() * 55) + 1;

  resultBlock.innerHTML = "Ваша випадкова знижка: " + "%" + randomNumber;

  resultBlock.style.display = "block";
}