var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = (key, value) => {
    var hashKey = hash(key);
    if(!this.collection.hasOwnProperty(hashKey)) {
      this.collection[hashKey] = {};
    }
    this.collection[hashKey][key] = value;
  }

  this.remove = (key, value) => {
    var hashObj = this.collection[hash(key)];
    if(hashObj.hasOwnProperty(value)) {
      delete hashObj[value];
    }
    if(!hashObj.length) {
      delete this.collection[hash(key)];
    }
  }

  this.lookup = (key) => {
    var hashKey = hash(key);
    if(this.collection.hasOwnProperty(hashKey)) {
      return this.collection[hashKey][key];
    }
    return null;
  }
  // change code above this line
};