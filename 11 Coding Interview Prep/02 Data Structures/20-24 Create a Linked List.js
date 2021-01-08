function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };
  
  // Only change code below this line
  this.add = function(element){
    var toAdd = new Node(element);
    if(length==0) {
      head = toAdd;
    } else {
      var addLoc = head;
      while(addLoc.next!=null) {
        addLoc=addLoc.next;
      }
      addLoc.next=toAdd;
    }
    length++;
  };
  
  this.remove = function(element){
    var searchNode = head;
    if(head.element==element) {
      head=head.next;
      length--;
      return;
    }
    while(searchNode) {
      if(searchNode.element == element) {
        searchNode = searchNode.next;
        console.log(searchNode);
        head.next = searchNode;
        length--;
        return;
      }
      searchNode = searchNode.next;
    }
  };
  
  this.isEmpty = function() {
    return length===0;
  }

  this.indexOf = function(element) {
    var currentNode = head;
    var index = 0;

    while(currentNode) {
      if(currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  this.elementAt = function(index) {
    var currentNode = head;
    var iterator = 0;

    while(currentNode) {
      if(iterator === index) {
        return currentNode.element;
      }
      currentNode = currentNode.next;
      iterator++;
    }

    return undefined;
  }
  
  this.removeAt = function(index){
    var currentNode = head;
    var previousNode;
    var iterator = 0;

    if(index<0 || index >= length) {
      return null;
    }

    if(length == 1) {
      head = null;
      length--;
      return currentNode.element;
    }

    length--;

    while(iterator !== index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      iterator++;
    }

    previousNode.next = currentNode.next;
    return currentNode.element;
  };
  
  this.addAt = function(index, element){
    var currentNode = head;
    var previousNode;
    var iterator = 0;

    if(index<0 || index > length) {
      return false;
    }

    if(index == 0) {
      head.next = currentNode;
      head.element = element;
      length++;
      return;
    }

    length++;

    while(iterator !== index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      iterator++;
    }

    previousNode.next = currentNode.next;
  };
  // Only change code above this line
}

var j = new LinkedList();
j.add('e');
j.add('e');
console.log(j.head());
console.log(j.size());