// Understand Functional Programming Terminology
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// Understand the Hazards of Using Imperative Code
var finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow)
  .join(workWindow.tabOpen());
console.log(finalTabs.tabs);

// Avoid Mutations and Side Effects Using Functional Programming
function incrementer () {
  var newValue = fixedValue+1;
  return newValue;
}

// Pass Arguments to Avoid External Dependence in a Function
function incrementer (argN) {
  return argN+1;
}

// Refactor Global Variables Out of Functions
function add (list, bookName) {
  return [...list, bookName];
}

function remove (list, bookName) {
  if(list.indexOf(bookName) != -1) {
    return [...list.slice(0,list.indexOf(bookName)), ...list.slice(list.indexOf(bookName)+1, list.length)];
  }
}

// Implement map on a Prototype
Array.prototype.myMap = function(callback){
  var newArray = [];
  for (let i=0; i<this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;

};

// Use the filter Method to Extract Data from an Array
var filteredList = watchList.filter(a => a.imdbRating >= 8).map(({Title: title, imdbRating: rating}) => ({title, rating}));

// Implement the filter Method on a Prototype
Array.prototype.myFilter = function(callback){
  var newArray = [];
  for(let i=0; i<this.length; i++) {
    if(callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;

// Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

// Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}

// Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

// Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

// Use the reduce Method to Analyze Data
function getRating(watchList){
  var sum = watchList.filter(a => a.Director=="Christopher Nolan").reduce((sum, movie) => sum + parseFloat(movie.imdbRating), 0);
  var count = watchList.filter(a => a.Director=="Christopher Nolan").reduce((count, movie) => count + 1, 0);
  return sum/count;
}

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
  return arr.filter(a => a>0 && parseInt(a)==a).map(a => a*a);
};

// Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  return arr.sort(function(a,b) {
    return a === b ? 0 : a > b ? 1 : -1;
  })
}

// Return a Sorted Array Without Changing the Original Array
function nonMutatingSort(arr) {
  let mutArray = arr.slice(0,arr.length);
  return mutArray.sort(function(a,b) {
    return a === b ? 0 : a > b ? 1 : -1;
  })
}

// Split a String into an Array Using the split Method
function splitify(str) {
  return str.split(/\s|-|,|\./);
}

// Combine an Array into a String Using the join Method
function sentensify(str) {
  let arr = str.split(/\W/);
  return arr.join(" ");
}

// Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
  let arr = title.split(" ");
  return arr.filter(a=>a.length>0).join("-").toLowerCase();
}

// Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
  return arr.every(function(a) {
    return a>0;
  });
}

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  return arr.some(function(a) {
    return a>0;
  });
}

// Introduction to Currying and Partial Application
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}