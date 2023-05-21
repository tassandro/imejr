function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var accessLevel = document.getElementById('access-level').value;

    if (validatePassword(password)) {
      if (saveUser(username, password, accessLevel)) {
        alert('Usuário cadastrado com sucesso!');
        redirectToLoginPage();
      } else {
        alert('O usuário já está cadastrado. Por favor, escolha outro nome de usuário.');
      }
    } else {
        alert('A senha deve conter pelo menos uma letra maiúscula e três números.');
    }
}

function validatePassword(password) {
    var uppercaseCount = 0;
    var numberCount = 0;

    for (var i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
          numberCount++;
      } else if (password[i] === password[i].toUpperCase()) {
          uppercaseCount++;
      }
      }
      return uppercaseCount >= 1 && numberCount >= 3;
}

function saveUser(username, password, accessLevel) {
    var users = localStorage.getItem('users');

    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return false;
      }
    }

    var user = {
        username: username,
        password: password,
        accessLevel: accessLevel
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    return true;
}

function redirectToLoginPage() {
    window.location.href = 'login.html';
}