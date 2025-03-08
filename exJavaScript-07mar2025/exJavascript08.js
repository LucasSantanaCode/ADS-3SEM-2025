//Crie um programa que solicite um ano ao usuário.
//Verifique se o ano é bissexto.
//Exiba uma mensagem informando o resultado.

// Variables
let year = parseInt(prompt("Digite o ano que deseja consultar:"));

// Logical
if (isNaN(year)) {
    console.log(`Por favor, insira um número válido.`);
} else {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(`${year} é um ano bissexto.`);
    } else {
        console.log(`${year} não é um ano bissexto`);
    };
};
