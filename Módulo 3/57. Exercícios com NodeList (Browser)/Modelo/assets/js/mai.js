const paragrafos = document.querySelector('.paragrafos');
//seleciona a classe  parragrafo e salva me paragrafos.

const ps = document.querySelectorAll('p');
//seleciona todos itens da classe que sejam p.
const estilosBody = getComputedStyle(document.body);
// salva o estilo da página(todos os estilos do body) que é body e salva em estilosBody
const backgroundColorBody = estilosBody.backgroundColor;
//seleciona a cor do background e salva na memória BackgroundoColorBosy.
console.log(backgroundColorBody);
// mostra a cor que selecionou.
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
// uso o for para setar as cores em todos os parágrafos.
// sem ter que digitar manualmento em todos.
    
}

