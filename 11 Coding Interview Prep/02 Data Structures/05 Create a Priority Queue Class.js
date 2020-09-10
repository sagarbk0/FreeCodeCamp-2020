function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.enqueue = (element) => {
    var i;
    if(this.collection.length==0) {
      this.collection.push(element);
    } else if (this.collection[0][1]>element[1]) {
      this.collection.unshift(element);
    } else {
      var i;
      for(i=1; i<this.collection.length; i++) {
        if(this.collection[i][1]>element[1]) {
          this.collection.splice(i-1,0,element);
        }
      }
      if(i==this.collection.length) {
        this.collection.push(element);
      }
    }
  }

  this.dequeue = () => {
    var firstElement = this.collection[0][0];
    this.collection.shift();
    return firstElement;
  }

  this.front = () => {
    return this.collection[0][0];
  }

  this.size = () => {
    return this.collection.length;
  }

  this.isEmpty = () => {
    return this.collection.length === 0;
  }
}

var pq = new PriorityQueue();
pq.enqueue(['Human', '3']);
pq.enqueue(['Pig', '3']);
pq.enqueue(['fd', '2']);
console.log(pq.collection);
pq.dequeue();
console.log(pq.collection);