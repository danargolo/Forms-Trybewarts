const button = document.getElementById('btnForm');
const formEmail = document.getElementById('email');
const formSenha = document.getElementById('senha');
const checkButton = document.getElementById('submit-btn');
const checkbox18 = document.getElementById('agreement');
const family = document.querySelectorAll('.fam');
const subject = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');

button.addEventListener('click', () => {
  formEmail.value === 'tryber@teste.com' && formSenha.value === '123456' ? alert('Olá, Tryber!') : 
  alert('Email ou senha inválidos.');
});

checkbox18.addEventListener('change', () => {
  checkbox18.checked ? checkButton.disabled = false : checkButton.disabled = true;
})

const counter = document.getElementById('counter');
const text = document.getElementById('textarea');
counter.innerText = `${text.getAttribute('maxlength')} / 500`;

text.oninput = function count() {
  counter.innerText = `${(text.getAttribute('maxlength') - text.value.length)} / 500`;
};

function hide() {
  const form = document.getElementById('evaluation-form');
  const formData = document.getElementById('form-data');
  form.style.display = 'none';
  formData.style.display = 'flex';
}

function formName() {
  const nameAnwser = document.getElementById('form-name');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');

  nameAnwser.innerText = `Nome: ${name.value} ${lastName.value}`;
}

function formEmailHouse() {
  const emailAnwser = document.getElementById('form-email');
  const houseAnwser = document.getElementById('form-house');

  emailAnwser.innerText = `Email: ${document.getElementById('input-email').value}`;
  houseAnwser.innerText = `Casa: ${document.getElementById('house').value}`;
}

function formFamily() {
  const famAnwser = document.getElementById('form-family');

  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      famAnwser.innerText = `Família: ${family[index].value}`;
    }
  }
}

function formSubject() {
  const subAwnser = document.getElementById('form-subject');
  const subs = [];

  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subs.push(` ${subject[index].value}`);
    }
  }
  subAwnser.innerText = `Matérias: ${subs}`;
}

function formRate() {
  const rateAnwser = document.getElementById('form-rate');

  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      rateAnwser.innerText = `Avaliação: ${rate[index].value}`;
    }
  }
}

const textAnwser = document.getElementById('form-textarea');

checkButton.addEventListener('click', () => {
  hide();
  formName();
  formEmailHouse();
  formFamily();
  formSubject();
  formRate();
  textAnwser.innerText = `Observações: ${text.value}`;
});
