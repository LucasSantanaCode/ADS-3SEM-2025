//Crie um programa que solicite o salário atual do funcionário.
//Se o salário for menor que R$ 1000, aplique um aumento de 15%.
//Se o salário for entre R$ 1000 e R$ 2000, aplique um aumento de 10%.
//Se o salário for maior que R$ 2000, aplique um aumento de 5%.
//Exiba o novo salário do funcionário.



// Variables
let salary = parseInt(prompt(`Insira o salário do funcionário.`));

// Call Function
increaseCalculator(salary)

// Function
function increaseCalculator (salary){
    if (salary < 1000) {
        salary = salary + (salary * 0.15); // 15%
        console.log(salary);
    } else if (salary <= 2000) {
        salary = salary + (salary * 0.10); // 10%
    } else if (salary > 2000) {
        salary = salary + (salary * 0.05); // 5%
    };

    return alert(`Salário atualizado R$ ${salary.toFixed(2)}.`)
}