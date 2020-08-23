// Task: Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
  let numPerms = 0;
  
  let arr=str.split('');

  const swap = (swapArr, a, b) => {
      const temp = swapArr[a];
      swapArr[a] = swapArr[b];
      swapArr[b] = temp;
  }

  const search = (length, searchArr) => {
      if (length === 1) {
          for (let i = 0; i < searchArr.length - 1; i++) {
              if (searchArr[i] == searchArr[i + 1]) {
                  return;
              }
          };
          numPerms++;
          return;
      }

      search(length - 1, searchArr);

      for (let i = 0; i < (length - 1); i++) {
          if (length % 2 === 0) {
              swap(searchArr, i, length - 1);
          } else {
              swap(searchArr, 0, length - 1);
          }

          search(length - 1, searchArr);
      }
  };

  search(arr.length, arr.slice());

  return numPerms;
}

console.log(permAlone('abfdefa'));