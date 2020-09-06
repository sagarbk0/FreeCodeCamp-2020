function mergeSort(array) {
  // change code below this line
  let modifiedArray=array.slice(0,array.length);

  function sort(array, min, max) {
    if(min<max) {
      let mid=Math.floor((min+max)/2);
      sort(array, min, mid);
      sort(array, mid+1, max);
      merge(array, min, mid, max);
    } 
  }

  function merge(array, min, mid, max) {
    let leftArray=[];
    let rightArray=[];
    let leftArraySize=mid-min+1;
    let rightArraySize=max-mid;

    for(let i=0; i<leftArraySize; i++) {
      leftArray[i]=array[min+i];
    }

    for(let j=0; j<rightArraySize; j++) {
      rightArray[j]=array[mid+1+j];
    }

    let i=0;
    let j=0;
    let k=min;

    while(i<leftArraySize && j<rightArraySize) {
      if(leftArray[i]<=rightArray[j]) {
        array[k]=leftArray[i];
        i++;
      } else {
        array[k]=rightArray[j];
        j++;
      }
      k++;
    }

    while(i<leftArraySize) {
      array[k]=leftArray[i];
      i++;
      k++;
    }

    while(j<rightArraySize) {
      array[k]=rightArray[j];
      j++;
      k++;
    }
  }

  sort(modifiedArray, 0, modifiedArray.length);

  // change code above this line
  return modifiedArray.slice(1,modifiedArray.length);
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
