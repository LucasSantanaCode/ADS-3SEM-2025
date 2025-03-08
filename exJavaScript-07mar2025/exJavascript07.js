// Crie um programa que solicite o peso e a altura do usuário.
// Calcule o Índice de Massa Corporal (IMC).
// Classifique o IMC em categorias (abaixo do peso, peso normal, sobrepeso, obesidade).

// Variables
let altura = parseFloat(prompt("Digite sua Altura."));
let peso = parseFloat(prompt("Digite seu Peso."));

// Call Function
calcularIMC(peso, altura);

// Function and return
function calcularIMC (peso, altura) {
    let imc = peso / (altura ** 2);
    let classificacao;
    if (imc < 16.0){
        classificacao = "Magreza Grave";
    } else if(imc < 17.0){
            classificacao = "Magreza Moderada";
    } else if (imc < 18.5) {
        classificacao = "Magreza Leve"
    } else if (imc < 25.0) {
        classificacao = "Saudável" 
    } else if (imc < 30.0) {
        classificacao = "Sobrepeso" 
    } else if (imc < 35.0) {
        classificacao = "Obesidade Grau 1" 
    } else if (imc < 40.0) {
        classificacao = "Obesidade Grau 2" 
    } else if (imc > 40.0) {
        classificacao = "Obesidade Grau 3" 
    }
    return alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
};