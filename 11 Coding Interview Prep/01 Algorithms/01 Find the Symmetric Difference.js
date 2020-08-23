// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(args) {
  //console.log(arguments)
  let symmetricDifference=arguments[0].filter(
    x => !arguments[1].includes(x)
    ).concat(
    (arguments[1].filter(
    x => !arguments[0].includes(x)
  )));
  //symmetricDifference = symmetricDifference.);

  //console.log(symmetricDifference);
  
  let j = 2;

  while(arguments[j]!=null) {
    let copy = symmetricDifference;
    symmetricDifference = 
      (arguments[j].filter(
        x => !symmetricDifference.includes(x)
      )).concat(
        (copy.filter(
        x => (!arguments[j].includes(x))
      )
      ));
    j=j+1;
  }

  return symmetricDifference.sort().filter((x, position) =>
    position == symmetricDifference.indexOf(x)
  );
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
