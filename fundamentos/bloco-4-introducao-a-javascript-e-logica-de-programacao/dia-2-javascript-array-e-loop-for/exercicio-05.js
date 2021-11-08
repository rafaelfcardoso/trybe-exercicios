let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let nlen = numbers.length;
big = 0

for (let i=0; i<nlen; i++){
    if (numbers[i]>big) {
        big = numbers[i]
    }
}

console.log(big);
