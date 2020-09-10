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