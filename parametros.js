
// console.log(soma(2, -212));

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica( numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));