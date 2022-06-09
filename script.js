//Array
let pessoa = [];

//Função para inserir pessoas no Array
function inserirPessoas(nome,idade){
    return {nome,idade}
}

//Inserindo pessoas no Array

pessoa.push(inserirPessoas("João",15));
pessoa.push(inserirPessoas("Mariana",22));
pessoa.push(inserirPessoas("Nathalia",25));

//Copiando o Array pessoa

let novasPessoasCopia = [...pessoa];

//Inserindo novas pessoas no Array cópia

novasPessoasCopia.push(inserirPessoas("Lucas",44));

console.log(pessoa);
console.log(novasPessoasCopia);