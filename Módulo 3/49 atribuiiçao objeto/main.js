const pessoa = { 
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: { 
        rua: 'Av Brasil',
        numero: 320
    }
};

// atribuição via desestruturação.
//const { nome , sobrenome} = pessoa;
//console.log(nome, sobrenome);
//console.log(nome)
//console.log(nome)

//onst {endereco: {rua: r = 12334, numero}, endereco} = pessoa;
//onsole.log(r, numero, endereco)
const{nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome);