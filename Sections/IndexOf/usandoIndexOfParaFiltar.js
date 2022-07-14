let filtro = "ve"; //realizar um filtro que comece apenas com as letras V e E
let cores = ['vermelho', 'verde', 'azul', 'amarelo']

let coresFiltrados = cores.filter( (cor) =>{
    if(cor.indexOf(filtro) !== -1){ // o -1 informa quando não é achado a informação, 
        //nesse caso queremos informações do "cores" sejam parecido com o "filtro", retornando algo
       return cor;
    }
});

console.log(coresFiltrados)

