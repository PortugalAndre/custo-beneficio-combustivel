//Função responsável por iniciar o funcionamento de todo o sistema ao receber inputs do HTML
function start() {
  var botaoCalcular = document.querySelector('#botaoCalcular');

  botaoCalcular.addEventListener('click', inputRecebido);

  //var inputGasolina = document.querySelector('#inputGasolina');
  //var inputEtanol = document.querySelector('#inputEtanol');

  //inputGasolina.addEventListener('input', inputRecebido);
  //inputEtanol.addEventListener('input', inputRecebido);
}

function calular(gasolina, etanol) {
  return etanol / gasolina;
}

function inputRecebido() {
  var inputGasolina = document.querySelector('#inputGasolina');
  var inputEtanol = document.querySelector('#inputEtanol');

  var gasolina = Number(inputGasolina.value);
  var etanol = Number(inputEtanol.value);

  resultado = calular(gasolina, etanol);

  if (resultado > 0.7) {
    var alcoolOuGasolina =
      'É mais vantajoso abastecer seu veículo com Gasolina';
  } else {
    var alcoolOuGasolina = 'É mais vantajoso abastecer seu veículo com Etanol';
  }

  resultadoCalculado.textContent = alcoolOuGasolina;
}
start();
