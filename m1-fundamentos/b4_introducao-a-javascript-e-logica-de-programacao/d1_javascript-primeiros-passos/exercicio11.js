var salario = 3000
var taxaINSS;
var taxaIR;

if(salario <= 1556.94) taxaINSS = 0.08
else if(salario >= 1556.95 && salario <= 2954.92) taxaINSS = 0.09
else if(salario >= 2594.93 && salario <= 5189.82) taxaINSS = 0.11
else if(salario > 5189.82){
    taxaINSS = 0;
    salario -= 570.88
}

salario -= salario * taxaINSS

if(salario <= 1903.98) taxaIR = [0,0]
else if(salario >= 1903.99 && salario <= 2826.65) taxaIR = [0.075, 142.80]
else if(salario >= 2826.66 && salario <= 3751.05) taxaIR = [0.15, 354.80]
else if(salario >= 3751.06 && salario <= 4664.68) taxaIR = [0.225, 636.13]
else if(salario > 4664.68) taxaIR = [0.275, 869.36]

salario -= (salario * taxaIR[0]) - taxaIR[1]

console.log(salario)