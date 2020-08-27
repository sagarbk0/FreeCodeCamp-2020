function insertionSort(array) {
  // change code below this line
  let modifiedArray=array.slice(0,1);

  for(let i=1; i<array.length; i++) {
    let j=0;
    let check=0;

    while(j<modifiedArray.length-1) {
      if(array[i]>=modifiedArray[j] && array[i]<=modifiedArray[j+1]) {
        // console.log(i, array[i], modifiedArray[j], modifiedArray[j+1]);
        modifiedArray.splice(j+1,0,array[i]);
        check=1;
        break;
      }

      j++;
    }

    if(check==0) {
      modifiedArray.push(array[i]);
    }
    
    // console.log(modifiedArray);
  }
  // change code above this line

  return modifiedArray;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
