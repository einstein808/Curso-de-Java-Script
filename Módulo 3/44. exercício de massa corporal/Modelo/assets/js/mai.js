//Capturar envento se submit do fomulário
const form = document.querySelector('#formulario')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("peso invalido", false);
        return;
    }
    if (!altura) {
        setResultado('altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    console.log(imc)

});

function getNivelImc (imc){
    const nivel = ['abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
}
function getImc (peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaP(className) {
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
