let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let small = numbers[0];

for (let i=0; i<numbers.length; i++){
    if (numbers[i]<small) {
        small = numbers[i]
    }
}

console.log(small);
