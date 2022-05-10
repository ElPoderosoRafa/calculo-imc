//seletores
const inputAltura = document.querySelector('#inputAltura');
const inputPeso = document.querySelector('#inputPeso');
const btnCalc = document.querySelector('#btnCalc');
const resultado = document.querySelector('.resultado');
const containerTable = document.querySelector('.containerTable');
const container = document.querySelector('.container');

// seletores tr
const magreza = document.querySelector('.magreza');
const normal = document.querySelector('.normal');
const sobrepeso = document.querySelector('.sobrepeso');
const obesidade = document.querySelector('.obesidade');
const obesidadeGrave = document.querySelector('.obesidadeGrave');
const trs = document.querySelectorAll('tr');

//funçoes
function calcularImc(altura, peso) {
  let imc = peso / Math.pow(altura, 2);
  return imc;
}
function mostrarResultado() {
  limpaMarcador();
  let imc = calcularImc(inputAltura.value, inputPeso.value);
  resultado.innerHTML = `<p>Seu IMC é de: ${imc.toFixed(2)}</p>`;
  limparInput();
  containerTable.setAttribute('style', 'display: block')
  container.setAttribute('style', 'height:65%');
  if (imc < 18.5) {
    magreza.setAttribute('style', 'background-color: RGBA( 255, 255, 224, 1 );')
  } else if (imc < 25.0) {
    normal.setAttribute('style', 'background-color: RGBA( 50, 205, 50, 0.4 );')
  } else if (imc < 30.0) {
    sobrepeso.setAttribute('style', 'background-color: RGBA( 250, 128, 114,0.4 );')
  }
  else if (imc < 40.0) {
    obesidade.setAttribute('style', 'background-color: RGBA( 255, 165, 0, 1 );')
  } else if (imc >= 40) {
    obesidadeGrave.setAttribute('style', 'background-color: RGBA( 255, 0, 0, 1 );')
  }
}

function limparInput() {
  inputAltura.value = '';
  inputPeso.value = '';
  inputPeso.focus();
}
function limpaMarcador() {
  for (let i = 1; i < trs.length; i++) {
    if (trs[i].style.backgroundColor !== 'none') {
      trs[i].style.backgroundColor = '';
    }
  }
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
