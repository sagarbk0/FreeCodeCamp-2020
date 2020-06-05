// Check if a string (first argument, str) ends with the given target string
// (second argument, target).

function confirmEnding(str, target) {
  return str.substring(str.length-target.length,str.length) == target;
}

console.log(confirmEnding("Congratulation", "oon"));

// Repeat a String
function repeatStringNumTimes(str, num) {
  if (num<=0) {
    return "";
  }
  let newStr = "";
  for (let i=0; i<num; i++) {
    newStr+=str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));

// Truncate a String
function truncateString(str, num) {
  if(str.length > num) {
    return str.substring(0,num) + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  for (let i=0; i<arr.length; i++) {
    if(func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);
console.log(booWho(NaN));

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  let newStr = str.split(" ");
  str = "";
  for (let i=0; i<newStr.length; i++) {
    str = str + newStr[i][0].toUpperCase();
    for(let j=1; j<newStr[i].length; j++) {
      str = str + newStr[i][j].toLowerCase();
    }
    if(i!=newStr.length-1) {
      str = str + " ";
    }
  }
  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


//Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0,n);
  for (let i=0;i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let i=n;i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let i = 0;
  let arr2 = [];
  while(true) {
    // console.log(arr.length);
    if(i>=arr.length) {
      break;
    }
    if(Boolean(arr[i]))  {
      arr2.push(arr[i]);
    }
    i++;
  }
  return arr2;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function getIndexToIns(arr, num) {
  for (let i=0; i<arr.length; i++) {
    if(num>arr[i] && num<arr[i+1]) {
      return i+1;
    }
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  if(arr.length==0) {
    return 0;
  }
  arr.sort(function(a,b){return a-b});
  if(num>arr[arr.length-1]) {
    return arr.length;
  }
  for (let i=0; i<arr.length; i++) {
    if(num==arr[i]) {
      return i;
    }
    if(num>arr[i] && num<arr[i+1]) {
      return i+1;
    }
  }
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log([5, 3, 20, 3].sort(function(a,b){return a-b}));
console.log(getIndexToIns([], 1));

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let arr0 = [];
  let arr1 = [];
  for (let i=0; i<arr[0].length; i++) {
    arr0.push(arr[0][i].toLowerCase());
  }
  for (let i=0; i<arr[1].length; i++) {
    arr1.push(arr[1][i].toLowerCase());
  }
  // console.log(arr0 + arr1);
  for(let i=0; i<arr1.length; i++) {
    if(!arr0.includes(arr1[i])) {
      return false;
    }
  }
  return true;
  // for (let i=0; i<arr[1].length; i++) {
  //   if (arr[0].includes(arr[1].substring(i,i+1).ignoreCase)) {
  //     return false;
  //   }
  // }
  // return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));

// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  let j = 0;
  arr2.push([]);
  for(let i=0; i<arr.length; i++) {
    arr2[j].push(arr[i]);
    if((i+1)%size == 0 && i!=arr.length-1) {
      arr2.push([]);
      j++;
    }
  }
  return arr2;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));