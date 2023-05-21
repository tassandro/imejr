function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = localStorage.getItem('users');

    if (users) {
      users = JSON.parse(users);

      var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
      });

      if (authenticatedUser) {
        alert('Login bem-sucedido!');
        redirectToMemberPage(authenticatedUser.accessLevel);
      } else {
        alert('Usuário ou senha incorretos. Por favor, tente novamente.');
      }
      } else {
        alert('Usuário não encontrado. Por favor, cadastre-se.');
      }
}
function redirectToMemberPage(accessLevel) {
    var memberPage = '';

    switch (accessLevel) {
      case 'membro':
      memberPage = 'membro.html';
      break;
      case 'socio':
      memberPage = 'socio.html';
      break;
      case 'diretor':
      memberPage = 'diretor.html';
      break;
      default:
    }

    window.location.href = memberPage;
}