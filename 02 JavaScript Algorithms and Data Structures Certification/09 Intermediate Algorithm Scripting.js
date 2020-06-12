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

// Pig Latin
function translatePigLatin(str) {
  let newstr='';
  let g = '';
  for(let x=0; x<str.length; x++) {
    if(str[x].match(/[aeiou]/)) {
      break;
    } else {
      g += str[x];
      newstr = str.substring(x+1,str.length);
    }
  }
  if(g!='') {
    newstr = newstr + g + "ay";
  } else {
    newstr = str + "way";
  }
  return newstr;
}

// Search and Replace
function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

// DNA Pairing
function pairElement(str) {
  let arr = [[]];
  for (let i=0; i<str.length; i++) {
    arr[i].push(str[i]);
    switch(str[i]) {
      case 'C':
        arr[i].push('G');
        break;
      case 'G':
        arr[i].push('C');
        break;
      case 'A':
        arr[i].push('T');
        break;
      case 'T':
        arr[i].push('A');
        break;
    }
    if (i!=str.length-1) {
      arr.push([]);
    }
  }
  return arr;
}

function fearNotLetter(str) {
  let g=str.charCodeAt(0);
  for(let i=0; i<str.length; i++) {
    if(str.charCodeAt(i)!=g) {
      return String.fromCharCode(g);
    }
    g++;
  }
  return undefined;
}

// Sorted Union
function uniteUnique() {
  let newArr = [];
  for (let i=0; i<arguments.length; i++) {
    for (let j=0; j<arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j]) == -1)  {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

// Convert HTML Entities
function convertHTML(str) {
  while(str.indexOf(' & ')!=-1 || str.indexOf("<")!=-1 || str.indexOf(">")!=-1 || str.indexOf('"')!=-1 || str.indexOf("'")!=-1) {
    str = str.replace(" & "," &amp; ");
    str = str.replace("<","&lt;");
    str = str.replace(">","&gt;");
    str = str.replace('"',"&quot;");
    str = str.replace("'","&apos;");
  }
  return str;
}

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let currfib0 = 1;
  let currfib1 = 1;
  let totoddfib = 0;
  if(currfib1%2!=0) {
    totoddfib+=currfib1;
  }
  while(currfib1<=num) {
    if(currfib1%2!=0) {
      totoddfib+=currfib1;
    }
    let currfib2 = currfib1;
    currfib1 = currfib1 + currfib0;
    currfib0 = currfib2;
  }
  return totoddfib;
}

// Sum All Primes
function sumPrimes(num) {
  let sumPrimes = 0;
  for (let i=2; i<=num; i++) {
    let find=0;
    for(let j=1; j<i; j++) {
      if (j!=1 && i%j==0) {
        find = 1;
        break;
      }
    }
    if(find==0) {
      sumPrimes+=i;
    }
  }
  return sumPrimes;
}

// Smallest Common Multiple
function smallestCommons(arr) {
  if(arr[1]<arr[0]) {
    let temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }
  let i = arr[1]+1;
  while(true) {
    let notthisi = 0;
    let count = 0;
    // while(count<=(arr[1]-arr[0])) {
    //   if(i%(arr[0]+count)==0) {
    //     count++;
    //   } else {
    //     notthisi=1;
    //     break;
    //   }
    // }
    if(i%arr[0] == 0 && i%arr[1] == 0) {
      if(i%arr[0]+1 == 0 && i%arr[1]-1 == 0) {
      for (let j = arr[0]+2; j<arr[1]; j++) {
        if (i%j!=0) {
          notthisi = 1;
          break;
        }
      }
      }
      else {
        notthisi=1;
      }
    } else {
      notthisi=1;
    }
    if(notthisi==0) {
      break;
    }
    i++;
  }
  return i;
}

console.log(smallestCommons([1,13]));
