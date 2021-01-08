var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.position = this.head;
  // Only change code below this line
  this.add = (element) => {
    if(this.head == null) {
      this.head = new Node(element, null);
      this.position = this.head;
    } else {
      var newNode = new Node(element, this.tail);

      var prev = null;

      if(this.tail != null) {
        prev = this.tail;
      } else {
        prev = this.head;
      }

      this.tail = newNode;
      this.tail.prev = prev;
      this.position.next = newNode;
      this.position = newNode;
    }
  }
  
  this.remove = (element) => {
    if(this.head == null) {
      return null;
    } else if(this.head.data == element) {
      this.head = this.head.next;
      
    } else if(this.tail.data == element) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      var i = this.head;
      while(i.data != null) {
        if(i.data == element) {
          i.data = i.next.data;
          i.next = i.next.next;
          delete(i.next);
          break;
        }
        i = i.next;
      }
    }
  }
  
  this.reverse = () => {
    if(this.head == null) {
      return null;
    }
    var i = this.head;
    while(i!=null) {
      var j = i;
      i = i.next;
      var origNext = j.next;
      j.next = j.prev;
      j.prev = origNext;
    }
    var origTail = this.tail;
    this.tail = this.head;
    this.head = origTail;
  }
  // Only change code above this line
};