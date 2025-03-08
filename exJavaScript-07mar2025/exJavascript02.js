// Call Function
calcularNota(5,9);

// Function
function calcularNota (nota1,nota2){
    let soma = nota1 + nota2;
    let media = soma / 2;
    if (media >= 7) {
        console.log("Aluno Aprovado! \n Média: " + media.toFixed(2));
    } else {
        console.log("Aluno reprovado! \n Média: " + media.toFixed(2))
    }
    
}

