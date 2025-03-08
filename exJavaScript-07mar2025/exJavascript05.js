// Crie um programa que solicite o valor de um produto e a quantidade comprada.
// Se a quantidade for maior que 10, aplique um desconto de 10%.
// Calcule e exiba o valor total da compra.



// Variables
let productValue = 1000;
let productQuantity = 11;
let buyValue = productValue * productQuantity;
const discountPercentage = 0.10; // 10%

// Lógica
if (productQuantity > 10) {
    let discount = buyValue * discountPercentage;
    buyValue = buyValue - discount
    console.log("Desconto de " + discountPercentage.toFixed(2) + " % Aplicada com Sucesso! \n Valor com desconto = R$ " + buyValue + ".");
} else {
    console.log("Desconto Negado!")
}