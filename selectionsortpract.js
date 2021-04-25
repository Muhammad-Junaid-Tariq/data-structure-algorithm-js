//complexity O(n2)
function selectionSortAlgo(array){
    let n=array.length;
    for(let i =0; i<n; i++){
        let min = i;
        for(let j=i+1;j<n;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        let tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
    }
    return array;
}

console.log(selectionSortAlgo([ 5, 2, 4, 6, 1, 3]))