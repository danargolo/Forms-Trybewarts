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

checkbox18.onchange = function habilita() {
  if (checkbox18.checked) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
};

const counter = document.getElementById('counter');
const text = document.getElementById('textarea');
counter.innerText = `${text.getAttribute('maxlength')} / 500`;

text.oninput = function count() {
  counter.innerText = `${(text.getAttribute('maxlength') - text.value.length)} / 500`;
};

// function hide() {
//   const form = document.getElementById('evaluation-form');
//   const formData = document.getElementById('form-data');
//   form.style.display = 'none';
//   formData.style.display = 'flex';
// }

// checkButton.addEventListener('input', hide);
