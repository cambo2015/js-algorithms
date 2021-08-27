//insertionSort
/**
 * @description Sorting algorithm . Also teaches how to go backwards in an array with a starting point
 * @param arr
 */
const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		//0 wont run anyway in the while loop so skip it
		let j = i //this is the starting point. From here we will go backwards
		while (j > 0 && arr[j - 1] > arr[j]) {
			//nothing below zero. We compare the two arr[j-1] and arr[j]

			;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]] //if lowest one is higher swap
			j-- //continue checking the numbers below
		}
	}
	return arr
}

const temp = insertionSort([5, 4, 6, 2, 1])

console.log("")
console.log("go backwards")
const goBackwards = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let startingPoint = i
		while (startingPoint > 0) {
			console.log(startingPoint)
			console.log(arr[startingPoint])
			startingPoint--
		}
	}
}

goBackwards([5, 2, 6, 5])
