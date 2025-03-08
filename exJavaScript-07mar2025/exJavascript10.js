//Crie um programa que gere um número aleatório entre 1 e 10.
//Solicite ao usuário que adivinhe o número.
//Forneça dicas se o número digitado é maior ou menor que o número gerado.
//Informe quando o usuário acertar.



// Variables
let machineNumber = Math.floor(Math.random() * 10) + 1;
let userNumber;

// Logical
do {
    userNumber = parseInt(prompt(`Digite um número de 1 a 10.`));

    if (userNumber > machineNumber) {
        alert(`O número digitado é maior que o número gerado \n Tente Novamente!`)
    }   else if (userNumber < machineNumber) {
        alert(`O número digitado é menor que o número gerado \n Tente Novamente!`)
    }
} while (userNumber !== machineNumber);

alert(`Parabéns! Você acertou! O número era ${machineNumber}`)