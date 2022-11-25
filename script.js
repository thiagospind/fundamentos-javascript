/*
var
No javascript  não é obrigatório declarar as variáveis usando var. 
As variáveis podem ser declaradas depois serem utilizadas, 
pois o javascript carrega todas as variaveis declaradaso com var antes da execução. 
Porém isso pode causar um problema de variaveis com o mesmo nome.
*/


// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }

// console.log(area)

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}
console.log(area);