// function minhaFuncao(param) {

// }

// minhaFuncao("param");

//EXPRESSÕES DE FUNÇÃO

//A expressão de função precisa ser inicializada antes de ser chamada, 
//o mesmo não ascontece com funções e var por causa do HOISTING 
//onde as funções e variáveis são listadas no topo ou antes da execução dos demais códigos

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1, 1))