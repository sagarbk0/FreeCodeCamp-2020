class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line
  add(element) {
    if(this.has(element)) {
      return false;
    }
    this.dictionary[element] = true;
    return true;
  }
  
  remove(element) {
    if(this.has(element)) {
      delete this.dictionary[element];
      return true;
    }
    return false;
  }
  
  size() {
    return this.values().length;
  }
  
  union(setB) {
	const newSet = new Set();
    for(var element in setB.dictionary) {
      newSet.add(element);
    }
	
    return this;
  }
  
  intersection(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if(set.has(value)) {
        newSet.add(value);
      }
    })
    set.values().forEach(value => {
      if(this.has(value)) {
        newSet.add(value);
      }
    })
    return newSet;
  }
  
  difference(set) {
    let differenceSet = new Set();
    this.values().forEach(value => {
      if(!set.has(value)) {
        differenceSet.add(value);
      }
    })
    return differenceSet;
  }
  
  isSubsetOf(set) {
    for(var value in this.dictionary) {
      if(!set.has(value)) {
        return false;
      }
    }
    return true;
  }
  // change code above this line
}