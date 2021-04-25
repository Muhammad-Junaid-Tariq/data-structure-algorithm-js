//O(n2)
function bubbleSortAlgo(array) {
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSortAlgo([5, 2, 4, 6, 1, 3]))