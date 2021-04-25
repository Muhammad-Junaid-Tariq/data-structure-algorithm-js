//complexity O(n2)
function secondLargest(array){
    let n=array.length;
    let firstlargest = 0;
    let secondlargest;
    for(let i =0; i<n; i++){
        for(let j=i;j<n;j++){
            if(array[j]>array[firstlargest]){
                secondlargest = firstlargest;
                firstlargest=j;
            }
        }
    }
    return {firstLargest: array[firstlargest], secondLargest: array[secondlargest]}
}

console.log(secondLargest([ 5, 2, 4, 6, 1, 3]))


