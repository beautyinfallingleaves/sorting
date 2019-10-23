// HELPER FUNCTION
function merge(arr1, arr2) {
  let newarray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newarray.push(arr1.shift());
    } else {
      newarray.push(arr2.shift());
    }
  }

  console.log('Merge-sorted array: ', newarray, '+', arr1, '+', arr2)
  return newarray.concat(arr1).concat(arr2);
}

// MAIN SORT FUNCTION
function mergeSort(arr) {
  console.log('About to MergeSort array ', arr)
  if(arr.length <= 1) return arr

  // console.log('Starting Array: ', arr)
  // console.log('split(arr): ', split(arr))
  const left = split(arr)[0]
  const right = split(arr)[1]
  console.log('Left: ', left)
  console.log('Right: ', right)

  return merge(mergeSort(left), mergeSort(right))
}


mergeSort([1,2,33,4,52,6,77,8, 0])
