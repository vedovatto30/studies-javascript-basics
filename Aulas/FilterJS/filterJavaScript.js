//É uma estrutura de repetição no Java Script que serve para percorerrer arrays. 
//Efetuando uma operação de callback a qual podera receber até 3 paramentros. 
//Por meio do filter, um novo array é criado retornando apenas os valores filtrados


// let numeros = [4, 5, 12, 358, 9, 83];

// let numerosFiltrados = numeros.filter( (valorAtual) => {
//     if(valorAtual > 10){ //com esse filter é verificado quais valores são maiores que 10 
//         //e pedidos para retornar
//         return valorAtual
//     }

   
// })
// console.log(numeros);
// console.log(numerosFiltrados)

//Também é possivel criar uma função que faça uma ação para o filte, não precisando inserir o modelo
//em todos os filtros

let idades = [17, 22, 54, 9, 12, 35]

function maiorIdade(novoIdade){
    if(novoIdade > 18){
        return novoIdade;
    }
}

let verificadorIdade = idades.filter(maiorIdade);
console.log(verificadorIdade)