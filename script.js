// CAPTURAS
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const botao = document.getElementById('botao');
const testArea = document.getElementById('textarea');
const resposta = 'Hard skill: dominio do javascript. Soft skill: comunicação';
testArea.value = resposta;
const botaoEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
botaoEnviar.disabled = true;
const contar = document.getElementById('counter');
// FUNÇÕES
const alertas = () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
botao.addEventListener('click', alertas);

const validaBotao = () => {
  if (checkBox.checked) {
    botaoEnviar.disabled = false;
  } else if (!checkBox.checked) {
    botaoEnviar.disabled = true;
  }
};
checkBox.addEventListener('click', validaBotao);

const contador = () => {
  const limitCaracteres = 500;
  let count = 0;
  count = limitCaracteres - testArea.value.length;
  contar.innerHTML = count;
};
testArea.addEventListener('input', contador);

const limpaTexto = () => {
  testArea.value = '';
  contador();
};
testArea.addEventListener('click', limpaTexto);
