function Queue() {
  var collection = [];
  
  this.print = function() {
    console.log(collection);
  };
  
  this.enqueue = (element) => {
    return collection.push(element);
  }

  this.dequeue = () => {
    var firstElement = collection[0];
    collection[0] = null;
    return firstElement;
  }

  this.front = () => {
    return collection[0];
  }

  this.size = () => {
    return collection.length;
  }

  this.isEmpty = () => {
    return collection.length === 0;
  }
}