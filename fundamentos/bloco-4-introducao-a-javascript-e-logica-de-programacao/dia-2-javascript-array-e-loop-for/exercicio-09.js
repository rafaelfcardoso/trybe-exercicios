array = [];
halving = []

for (let i=1; i<=25; i++) {
    array.push(i);        
}

for (let i=0; i < array.length; i++){
    halving.push(array[i]/2);

}

console.log(halving);