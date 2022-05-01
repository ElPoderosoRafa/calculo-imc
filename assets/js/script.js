//seletores
const inputAltura = document.querySelector('#inputAltura');
const inputPeso = document.querySelector('#inputPeso');
const btnCalc = document.querySelector('#btnCalc');
const resultado = document.querySelector('.resultado');
const containerTable = document.querySelector('.containerTable');
const container = document.querySelector('.container');



//funçoes
function calcularImc(altura, peso) {
  let imc = peso / Math.pow(altura, 2);
  return imc;
}
function mostrarResultado() {
  let paragrafoResultado = document.createElement('p');
  let imc = calcularImc(inputAltura.value, inputPeso.value);
  paragrafoResultado.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}`;
  resultado.appendChild(paragrafoResultado);
  limparInput();
  containerTable.setAttribute('style', 'display: block')
  container.setAttribute('style', 'height:60%');
}
function limparInput() {
  inputAltura.value = '';
  inputPeso.value = '';
    inputPeso.focus();
}

//escutas
btnCalc.addEventListener('click', () => {
  if (inputAltura.value == '' || inputPeso.value == '') {
    alert('Digite o valor nos campos')
    limparInput();
  } else {
    mostrarResultado();
  }
})
