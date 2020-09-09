// 01 Typed Arrays
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

// 02 Learn How a Stack Works
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
homeworkStack.pop();
homeworkStack.push("CS50");

// 03 Create a Stack Class
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

// 04 Create a Queue Class
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

// 05 Create a Priority Queue Class
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

// 06 Create a Circular Queue
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    this.writeTotal = 0;
    this.readTotal = 0;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if(this.queue[this.write]!==null) {
      return null;
    } 

    this.queue[this.write]=item;
    this.write++;
    this.write %= this.queue.length;

    return item;
  }

  dequeue() {
    var dequeuedItem = null;
	
    if(this.queue[this.read]!==null) {
      dequeuedItem = this.queue[this.read];
      this.queue[this.read] = null;
	  this.read++;
	  this.read %= this.queue.length;
    } 
	
    return dequeuedItem;
  }
}