
/**
 * 
 * @param {Array} arr 
 * @returns {Array} sorted array
 * @description Bubble sort teaches us how to do check/compare two adjacent elements. It also teaches us how to swap  
 */
const bubleSort = (arr) => {
    //https://www.youtube.com/watch?v=xli_FI7CuzA

    const temp = [...arr]
    if (Array.isArray(temp)) {
      for (let i = 0; i < temp.length; i++) {
          
          for (let j = 0; j < temp.length; j++) {
             
              if (temp[j] > temp[j + 1]) {
                  [temp[j],temp[j+1]] = [temp[j+1],temp[j]]
              }
          }
        }
        // console.log(temp)
       return temp
    }
}

bubleSort(items)