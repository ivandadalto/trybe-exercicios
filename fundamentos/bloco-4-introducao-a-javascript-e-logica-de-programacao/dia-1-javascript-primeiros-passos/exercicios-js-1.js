// OPERADORES LÓGICOS PRINCIPAIS

// && = AND
// || = OR
// ! = NOT


// let nota = 10 // numero entre 1 e 100

// if(nota >= 80) {

//   console.log("Parabens")

// }

// else if(nota < 80 && nota >= 60) {
//   console.log("Voce está na lista de espera")

// }

// else if(nota < 60){
//   console.log("Voce foi reprovado")
// }


// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo)

// const currentHour = 20  // escolher numero entre 4 e 24
// let message = ""

// if(currentHour >= 22){
//   message += "Não deveríamos comer nada, é hora de dormir"
// }
// else if(currentHour >= 18 && currentHour < 22){
//   message += "Rango da noite, vamos jantar :D"

// }
// else if(currentHour >= 14 && currentHour < 18){
//   message += "Vamos fazer um bolo pro café da tarde?" 
// }
// else if(currentHour >= 11 && currentHour < 14){
//   message += "Hora do almoço!!!"
  
// }
// else if(currentHour >= 4 && currentHour < 11){
//   message += "Hmmm, cheiro de café recém passado"
// }

// else {
//   message += "Voce deveria estar dormindo"
// }

// console.log(message)

// let weekDay = ""

// if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
// console.log("Oba Mais um dia de aprendizado na Trybe")
// }
// else {
//   console.log("FINALMENTE, descanso merecido UwU")
// }


// EXERCICIOS 4.1 <------------------------

//1.

// const a = 4
// const b = 2
// 
// console.log('Soma: ' + (a + b))
// console.log('Subtração: ' + (a - b))
// console.log('Multiplicação: ' + (a * b))
// console.log('Divisão: ' + (a / 2))
// console.log('Resto: ' + (a % b))

//2.
// const a = 10
// const b = 5

// if(a > b){
//   console.log('a é o maior entre as variáveis.')
// }
// else{
//   console.log('b é o maior entre as variáveis')
// }

//3.

// const a = 80
// const b = 50
// const c = 70

// if(a > b && a > c){
//   console.log('O maior número é: ' + a + ' (a)');
// }
// else if(b > a && b > c){
//   console.log("b é o maior entre os números")
// }
// else{
//   console.log("c é o maior entre os numeros")
// }

//4.

// const a = 20
// 
// if(a > 0){
  // console.log("a é positivo")
// }
// else if(a < 0){
  // console.log("a é negativo")
// }
// else{
  // console.log("ZERO")
// }

// 5. 
// const a = 60
// const b = 60
// const c = 60

// if((a + b + c) === 180){
//   console.log("a,b e c são angulos de um triangulo(true)")
// }

// else if(a <= 0 || b <= 0 || c<= 0){
//   console.log("ERROR")
// }
// else{
//   console.log("False, nao são angulos de um triangulo")

// }

//6.


// const chessPiece = 'rei'

// switch(chessPiece.toLowerCase()){
//   case 'rei' :
//     console.log('movimento:','Uma casa apenas em qualquer direção')
//     break;
//   case 'bispo' :
//       console.log('movimento:','Quantas casas desejar na diagonal')
//     break;
//   case 'cavalo' :
//     console.log('movimento:','4 casas em L')
//     break;
//   case 'torre' :
//     console.log('movimento:','quantas casas desejar em linha reta')
//     break;
//   case 'rainha' :
//     console.log('movimento:','quantas casas desejar em qualquer direção')  
//     break;
//   case 'peão' :
//     console.log('movimento:','1 casa nas diagonais')  
//     break;
//   default:
//     console.log('Erro, peça inválida!') 
  
// }

//7.

// const note = 0;

// if(note < 0 || note > 100){
//   console.log('Erro nota incorreta.')
// }
// else if (note >= 90){
//   console.log('Conceito: A')
// }
// else if (note >= 80){
//   console.log('Conceito: B')
// }
// else if (note >= 70){
//   console.log('Conceito: C')
// }
// else if (note >= 60){
//   console.log('Conceito: D')
// }
// else if (note >= 50){
//   console.log('Conceito: E')
// }
// else{
//   console.log('Conceito: F')
// }

// 8.

// const number1 = 2
// const number2 = 3
// const number3 = 5

// if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0 ){
//   console.log('True')
// }
// else {console.log('False')}

// // 9.

// const number1 = 1;
// const number2 = 0;
// const number3 = 4;

// let isOdd = false;

// if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
//   isOdd = true;
// };
// console.log(isOdd);

//10.

// const custo = 100;
// const valorVenda = 200;
// const imposto = valorVenda * 0.2;
// const valorCustoTotal = (custo + imposto)
// let lucro;

// if(custo <= 0 || valorVenda <=0){
//   console.log('Erro, programa interrompido.')
// }
// else{
//   console.log('Ao vender 1000 produtos a empresa terá de lucro: ','R$', (valorVenda - valorCustoTotal) * 1000)
// }

// OUTRA MANEIRA DE RESOLVER

// const custo = 100;
// const valorVenda = 200;
// const imposto = custo * 0.2;
// const valorCustoTotal = (custo + imposto)
// let lucro;

// if(custo >= 0 && valorVenda >=0){
//   console.log('Ao vender 1000 produtos a empresa terá de lucro: ','R$', (valorVenda - valorCustoTotal) * 1000)
// }
// else{
//   console.log('Erro, programa interrompido.')
// }

//.11

let salarioBruto = 3000;
let inss;
let ir;
let salarioASerRecebido = salarioBase - ir;
let salarioBase = salarioBruto - inss;



if(salarioBruto <= 1556.94){
  inss = (0.08 * salarioBruto)
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  inss = (0.09 * salarioBruto)

}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  inss = (0.11 * salarioBruto)

}
else if(salarioBruto >= 5189.2){
  inss = 570.88
}


if(salarioBase <= 1903.98){
  ir = 0
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
  ir = (salarioBase * 0.075) - 142.80

}
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80

}
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 636.13
}

else if(salarioBase > 4664.68){
  ir = (salarioBase * 0.275) - 869.36
};

console.log(isNaN())


console.log(salarioASerRecebido)
