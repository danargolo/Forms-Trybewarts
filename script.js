const formEmail = document.getElementById('email');
const formSenha = document.getElementById('senha');
const checkButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const family = document.querySelectorAll('.fam');
const subject = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');

function validaForm() {
  if (formEmail.value === 'tryber@teste.com' && formSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    return alert('Email ou senha inválidos.');
  }
}

document.getElementById('btnForm').addEventListener('click', validaForm);

checkbox.onchange = function habilita() {
  if (checkbox.checked) {
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

function hide() {
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'flex';
}

function completeAwnser(par1, par2, par3) {
  for (let index = 0; index < par1.length; index += 1) {
    if (par1[index].checked) {
      document.getElementById(par2).innerText = `${par3}: ${par1[index].value}`;
    }
  }
}

function formSubject() {
  const subs = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subs.push(` ${subject[index].value}`);
    }
  }
  document.getElementById('form-subject').innerText = `Matérias: ${subs}`;
}

const nameAnwser = document.getElementById('form-name');
const emailAnwser = document.getElementById('form-email');
const houseAnwser = document.getElementById('form-house');
const textAnwser = document.getElementById('form-textarea');

checkButton.addEventListener('click', (param) => {
  param.preventDefault();
  hide();
  nameAnwser.innerText = `Nome: ${firstName.value} ${lastName.value}`;
  emailAnwser.innerText = `Email: ${document.getElementById('input-email').value}`;
  houseAnwser.innerText = `Casa: ${document.getElementById('house').value}`;
  completeAwnser(family, 'form-family', 'Família');
  completeAwnser(rate, 'form-rate', 'Avaliação');
  formSubject();
  textAnwser.innerText = `Observações: ${text.value}`;
});
