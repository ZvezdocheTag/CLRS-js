const numbers = [3,44,1,5];

function insertionSort(arr) {
  for( let i = 0; i < arr.length; i+=1 ) {
    const current = arr[i];
    let prev =  i - 1;
    while(i > 0 && arr[prev] < current) {
      arr[prev + 1] = arr[prev];
      prev = prev - 1;
    }
    arr[prev + 1] = current; 
  }
  return arr;
}

console.log(insertionSort(numbers)) // - [44, 5, 3, 1]

