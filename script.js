const button = document.getElementById('btnForm');
const formEmail = document.getElementById('email');
const formSenha = document.getElementById('senha');
const checkButton = document.getElementById('submit-btn');
const checkbox18 = document.getElementById('agreement');

function validaForm() {
  if (formEmail.value === 'tryber@teste.com' && formSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    return alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validaForm);

checkbox18.onchange = function habilita () {
  if (checkbox18.checked) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
}