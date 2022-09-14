const button = document.getElementById('btnForm');
const formEmail = document.getElementById('email');
const formSenha = document.getElementById('senha');

function validaForm () {
    if (formEmail.value === 'tryber@teste.com' && formSenha.value == '123456')
        return alert('Olá, Tryber!');
        else {
            return alert('Email ou senha inválidos.');
        }
}

button.addEventListener('click', validaForm);



