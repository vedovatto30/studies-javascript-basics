//percorer um array e verificar se falta informações desejadas

let pessoas = [
    {
        nome: 'Joao',
        telefone: null,
        idade: 20
    },
    {
        nome: 'Carlos',
        telefone: null,
        idade: 20
    },
    {
        nome: 'Marcia',
        telefone: '(11)9988002200',
        idade: 20
    },
]

let semFone = pessoas.filter( (semTel) =>{ //criado a variave que recebera o filtro, com callback
    if(semTel.telefone == null){ //sempre referenciar a variavel nova que serve de callback
        return semTel.nome;
        //tbem é possivel usar -  if(!semTel.telefone) { }

    }
})

console.log(semFone)