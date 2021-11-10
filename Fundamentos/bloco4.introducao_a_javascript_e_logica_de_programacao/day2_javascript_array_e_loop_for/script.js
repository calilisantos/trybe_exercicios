let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
console.log("Resultado 1:")
for(let i = 0; i <numbers.length; i += 1) {
console.log(numbers[i])
}

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let plus = 0
for(let i = 0; i <numbers.length; i += 1) {
    plus += numbers[i];
} console.log("Resultado 2:", plus)

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let média = plus/numbers.length
console.log("Resultado 3:", média)

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (média >20) {
console.log("Resultado 4:", "valor maior que 20")
}
else {
console.log("Resultado 4:","valor menor ou igual a 20")
}

//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let max = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] > max) {
max = numbers[i];
}
}
console.log("Resultado 5:", max); 

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
var oddNumbers = []
for(let i = 0; i <numbers.length; i += 1) {
plus += numbers[i];
if(numbers[i] % 2 !== 0) {
oddNumbers.push(numbers[i]); 
}
}
if(oddNumbers.length>0) {
console.log("Resultado 6:",oddNumbers)
} 
else {
console.log("Resultado 6:nenhum valor ímpar encontrado")
}

//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let min = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] < min) {
min = numbers[i];
}
}
console.log("Resultado 7:", min); 

//8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let até25 = []
for( to25 = 1; to25 <=25; to25+=1) {
até25.push(to25)
} console.log("Resultado 8:", até25)

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let divisor = []
for (let div = 0; div < até25.length ; div+=1) {
divisor.push(até25[div]/2) 
} console.log("Resultado 9:", divisor) 
