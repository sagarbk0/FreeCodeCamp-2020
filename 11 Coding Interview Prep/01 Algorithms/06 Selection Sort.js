function selectionSort(array) {
  // change code below this line
  let modifiedArray=array.slice();
  
  function swap(arr, x, y) {
    let temp=arr[y];
    arr[y]=arr[x];
    arr[x]=temp;
  }

  for(let i=0; i<modifiedArray.length; i++) {
    let min=Number.MAX_SAFE_INTEGER;
    let minIndex=i;

    for(let j=i; j<modifiedArray.length; j++) {
      if(modifiedArray[j]<min) {
        min=modifiedArray[j];
        minIndex=j;
      }
    }

    if(minIndex!=i) {
      swap(modifiedArray, minIndex, i);
    }
  }

  return modifiedArray;
  // change code above this line
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
