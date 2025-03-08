// Crie um programa que solicite o comprimento de três lados de um triângulo.
// Verifique se os lados formam um triângulo válido.
// Classifique o triângulo como equilátero, isósceles ou escaleno.



// Variables
let ladoA = parseFloat(prompt("Digite o 1º Lado do Triângulo"));
let ladoB = parseFloat(prompt("Digite o 2º Lado do Triângulo"));
let ladoC = parseFloat(prompt("Digite o 3º Lado do Triângulo"));

// Call Function
identificarTriangulo(ladoA, ladoB, ladoC);

// Function
function identificarTriangulo (ladoA, ladoB, ladoC) {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoA === ladoC) {
            console.log("Triângulo Equilatero");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo Isósceles");
        } else {
            console.log("Triângulo Escaleno");
        }
    } else {
        console.log("Os valores informados não formam um Triângulo")
    }
};

