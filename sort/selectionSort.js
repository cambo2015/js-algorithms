const selectionSort = (myArr) => {
	const arr = [...myArr]

	for (let i = 0; i < arr.length; i++) {
	  let min = i
		for (let j = i + 1; j < arr.length; j++) {//set to the next element above i
			if (arr[j] < arr[min]) {
				min = j //set curr min to current element if it is < the current min
			}
		}
		if (min !== i) {//if min is not itself then swap the two elements
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}
	return arr
}

const temp = selectionSort([5, 9, 4, 3, 1, 2])
console.log(temp)
