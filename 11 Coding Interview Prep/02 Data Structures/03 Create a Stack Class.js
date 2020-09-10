function Stack() {
  var collection = [];
  
  this.print = function() {
    console.log(collection);
  };
  
  this.push = (val) => {
    return collection.push(val);
  }

  this.pop = () => {
    return collection.pop();
  }

  this.peek = () => {
    return collection[collection.length-1];
  }

  this.isEmpty = () => {
    return collection.length===0;
  }

  this.clear = () => {
    while(collection.length!=0) {
      collection.pop()
    }
  }
}