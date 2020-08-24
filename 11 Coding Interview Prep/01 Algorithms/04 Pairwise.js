/* Given an array arr, find element pairs whose sum equal the second argument arg and return 
the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices. Each 
pair should use the lowest possible available indices. Once an element has been used it cannot 
be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair 
[2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2. */

function pairwise(arr, arg) {
  let sum=0;
  let preusedIndices={};

  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      if(arr[i]+arr[j]==arg && i!=j && preusedIndices[i] == null && preusedIndices[j] == null) {
        sum+=(i+j);
        preusedIndices[i]=1;
        preusedIndices[j]=1;
      }
    }
  }
  return sum;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));