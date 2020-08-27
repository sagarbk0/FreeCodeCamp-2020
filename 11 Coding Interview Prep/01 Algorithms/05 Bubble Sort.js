function bubbleSort(array) {
  // change code below this line
  let swapsDidntOccur=0;
  let modifiedArray=array.slice();

  function swap(arr, x, y) {
    let temp=arr[y];
    arr[y]=arr[x];
    arr[x]=temp;
  }
  
  while(swapsDidntOccur==0) {
    let swapsDidOccur=0;

    for(let i=0; i<modifiedArray.length-1; i++) {
      if(modifiedArray[i]>modifiedArray[i+1]) {
        swap(modifiedArray, i, i+1);
        swapsDidOccur=1;
      }
    }

    if(swapsDidOccur==0) {
      swapsDidntOccur=1
    }
  }

  return modifiedArray;
  // change code above this line
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
