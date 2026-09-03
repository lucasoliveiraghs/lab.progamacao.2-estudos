const arr = [2,3,4]

console.log(arr)
arr.push(7)
console.log(arr);
console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(`O valor no índice ${i} é ${arr[i]}`);
}

for(let valor of arr){
    console.log(`O valor é ${valor}`)
}

