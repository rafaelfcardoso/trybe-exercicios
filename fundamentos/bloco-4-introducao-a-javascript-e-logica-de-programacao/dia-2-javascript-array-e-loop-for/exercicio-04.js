let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let nlen = numbers.length;
let sum = 0;

for (let i=0; i<nlen; i++){
    sum = sum + numbers[i];
}

mediaAritmetica = sum / nlen;

if (mediaAritmetica>20){
    console.log("Valor maior do que 20.")
} else {
    console.log("Valor menor ou igual a 20.")
}