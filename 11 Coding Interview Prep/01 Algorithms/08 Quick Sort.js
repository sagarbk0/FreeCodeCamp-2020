function quickSort(array) {
  // change code below this line
  let modifiedArray=[];
  
  function sorter(arrayToSort) {
    console.log(arrayToSort);
    if(arrayToSort.length>1) {
      let valuesLessThanPivot=[];
      let valuesGreaterThanPivot=[];

      for(let i=1; i<arrayToSort.length; i++) {
        if(arrayToSort[i]<arrayToSort[0]) {
          valuesLessThanPivot.push(arrayToSort[i]);
        } else {
          valuesGreaterThanPivot.push(arrayToSort[i]);
        }
      }

      sorter(valuesLessThanPivot);
      modifiedArray.push(arrayToSort[0]);
      sorter(valuesGreaterThanPivot);
    } else if(arrayToSort.length==1) {
      modifiedArray.push(arrayToSort[0]);
    }
  }

  sorter(array);

  // change code above this line
  return modifiedArray;
}

// test array:
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
