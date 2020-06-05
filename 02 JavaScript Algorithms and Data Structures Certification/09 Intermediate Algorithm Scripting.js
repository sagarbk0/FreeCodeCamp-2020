// Sum All Numbers in a Range
function sumAll(arr) {
  let sum=0;
  if(arr[0]<arr[1]) {
    for (let x=arr[0]; x<=arr[1]; x++) {
      sum+=x;
    }
  } else {
    for (let x=arr[1]; x<=arr[0]; x++) {
      sum+=x;
    }
  }
  return sum;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  let newA1 = arr1.filter(x => arr2.indexOf(x)==-1);
  let newA2 = arr2.filter(x => arr1.indexOf(x)==-1);
  for (let i=0; i<newA1.length; i++) {
    newArr.push(newA1[i]);
  }
  for (let i=0; i<newA2.length; i++) {
    newArr.push(newA2[i]);
  }
  return newArr;
}

// Seek and Destroy
function destroyer(arr) {
  for(let i=0; i<arguments.length; i++) {
    while(arr.indexOf(arguments[i])!=-1) {
      arr.splice(arr.indexOf(arguments[i]),1);
    }
  }
  return arr;
}

// Wherefore art thou
function whatIsInAName(collection, source) {
  var arr = [];
  for(let i=0;i<collection.length;i++) {
    let j=0;
    for(let key in source) {
      if(collection[i][key]==source[key]) {
      } else {
        j++;
      }
    }
    if(j==0) {
      arr.push(collection[i]);
    }
  }
  return arr;
}

// Spinal Tap Case
function spinalCase(str) {
  str=str.replace(/([a-z])([A-Z])/g,'$1-$2');
  let arr=str.split(/\W|_/);
  let str2=arr.join("-").toLowerCase();
  return str2;
}