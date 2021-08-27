/**
 *
 * @param {Array} arr
 * @returns {Array} sorted array
 * @description O(n^2) Bubble sort teaches us how to do check/compare two adjacent elements. It also teaches us how to swap
 */
const bubleSort = (arr) => {
	//https://www.youtube.com/watch?v=xli_FI7CuzA

	const temp = [...arr]
	if (Array.isArray(temp)) {
		for (let i = 0; i < temp.length; i++) {
			for (let j = 0; j < temp.length; j++) {
				if (temp[j] > temp[j + 1]) {//compare two adjacent items | if the left item is grater then swap them
					[temp[j], temp[j + 1]] = [temp[j + 1], temp[j]] //this is how you swap in js! It's a lot like python
				}
			}
		}
		// console.log(temp)
		return temp
	}
}

const bs = bubleSort(items)
console.log(bs)
