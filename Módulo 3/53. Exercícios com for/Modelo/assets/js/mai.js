
const elemetos = [
    {tag:'p', texto: 'qualquer texto que voce quiser.'},
    {tag:'div', texto: 'frase 2'},
    {tag:'section', texto: 'frase 3'},
    {tag:'footer', texto: 'frase 4'},
];
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i< elemetos.length; i++ ){
    let { tag, texto }= elemetos[i];
    let tagcriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto)
    div.appendChild(tagcriada);
    tagcriada.appendChild(textoCriado);
    
}
container.appendChild(div);