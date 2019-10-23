// var swapped;

var swapped;

function bubblesort(arr) {
 if (arr.length === 1) return arr;
 let end = arr.length - 1;

 swapped = false;
 for (let i = 0; i < end; i++) {
   if (arr[i] > arr[i + 1]) {

    let results = swap(arr[i], arr[i+1]);
    arr[i] = results[0];
    arr[i+1] = results[1];
   }
 }

 if (!swapped) {
   return arr;
 } else {
   return bubblesort(arr);
 }
}

function swap(left, right) {
  if (left < right) swapped = false;
  let temp = left;
  left = right;
  right = temp;
  swapped = true;
  return [left, right]
}
