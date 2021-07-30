const arr = [5, 9, 4, 3, 1, 2]
const selectionSort = (myArr) => {
    const arr = [...myArr]
    let min = 0
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j //set curr min to current element if it is < the current min
           }
        }
        if (min !== i) { //if min is not itself then swap the two elements (double check)
            [arr[i], arr[min]] = [arr[min], arr[i]]
            console.log(arr)
      }
    }
   return arr
}

const temp = selectionSort(arr)
console.log(temp)