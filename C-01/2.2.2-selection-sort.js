let A = [12,5,2,78,4];

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i += 1) {
    const getShortArr = arr.slice(i, arr.length);
    const max = Math.max.apply(null, getShortArr);
    const filterWithoutMax = arr.filter((item, i) => i !== arr.indexOf(max));
    arr = [max, ...filterWithoutMax ];
  }
  return arr;
}

console.log(selectionSort(A)) // - [2, 4, 5, 12, 78]