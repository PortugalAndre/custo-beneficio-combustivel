//Função responsável por iniciar o funcionamento de todo o sistema ao receber inputs do HTML
function start() {
  var botaoCalcular = document.querySelector('#botaoCalcular');
  /*MODIFICAR BOTÃO ATRAVÉS DO JS
  buttonCalculateImc.textContent = 'modifiquei';
  */
  botaoCalcular.addEventListener('click', inputRecebido);

  var inputGasolina = document.querySelector('#inputGasolina');
  var inputEtanol = document.querySelector('#inputEtanol');

  inputGasolina.addEventListener('input', inputRecebido);
  inputEtanol.addEventListener('input', inputRecebido);
}

function calular(gasolina, etanol) {
  return gasolina / etanol;
}

function inputRecebido() {
  var inputGasolina = document.querySelector('#inputGasolina');
  var inputEtanol = document.querySelector('#inputEtanol');

  var gasolina = Number(inputGasolina.value);
  var etanol = Number(inputEtanol.value);

  resultado = calular(gasolina, etanol);

  resultadoCalculado.textContent = resultado;
}
start();
