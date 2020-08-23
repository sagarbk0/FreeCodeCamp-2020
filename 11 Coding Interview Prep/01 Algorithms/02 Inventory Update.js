// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let obj1={},
        obj2={},
        i=0,
        j=0,
        arr3=[];

    while(i<arr1.length) {
        obj1[arr1[i][1]] = arr1[i][0];
        i++;
    }

    while(j<arr2.length) {
        obj2[arr2[j][1]] = arr2[j][0];
        j++;
    }

    for(var item in obj2) {
        if(obj1[item]==null) {
            obj1[item]=obj2[item];
        } else {
            obj1[item]+=obj2[item];
        }
    }

    for(var item in obj1) {
        arr3.push([obj1[item], item]);
    }

    return arr3.sort(function(a,b) {
        return a[1].localeCompare(b[1])
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
