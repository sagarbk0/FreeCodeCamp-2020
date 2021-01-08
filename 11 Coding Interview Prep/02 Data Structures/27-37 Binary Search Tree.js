var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(element) {
    if(element !== parseInt(element, 10)) {
      return null;
    }

    if(this.root == null) {
      this.root = new Node(element);
      return undefined;
    }
    
    var iRoot = null;
    var i = this.root;
    while(i!=null) {
      if(element<i.value) {
        iRoot = i;
        i=i.left;
      } else if(element>i.value) {
        iRoot = i;
        i=i.right;
      } else if(element==i.value) {
        return null;
      }
    }
    if(element<iRoot.value) {
      iRoot.left = new Node(element);
      return undefined;
    }
    if(element>iRoot.value) {
      iRoot.right = new Node(element);
      return undefined;
    }
  }
  
  this.findMin = function() {
    if(this.root == null) {
      return null;
    }

    var i = this.root;

    while(i.left!=null) {
      i = i.left;
    }

    return i.value;
  }

  this.findMax = function() {
    if(this.root == null) {
      return null;
    }

    var i = this.root;

    
    while(i.right!=null) {
      i = i.right;
    }

    return i.value;
  }
  
  this.isPresent = function(element) {
    var i = this.root;

    while(i != null) {
      if(i.value == element) {
        return true;
      } else if(i.value < element) {
        i = i.right;
      } else if(i.value > element) {
        i = i.left;
      }
    }

    return false;
  }
  
  this.findMinHeight = function() {
    if(this.heights().indexOf(-1) != -1) {
      return -1;
    }
    return Math.min(...this.heights())+1;
  }

  this.findMaxHeight = function() {
    if(this.heights().indexOf(-1) != -1) {
      return -1;
    }
    return Math.max(...this.heights())+1;
  }

  this.isBalanced = function() {
    if(this.findMaxHeight() - this.findMinHeight()>1) {
      return false;
    } else {
      return true;
    }
  }
  
  this.heights = function() {
    return findTreeHeights(this.root, -1);
  }
  
  // Depth First Search Methods
  this.inorder = function() {
    if(this.root == null) {
      return null;
    }

    var items = [];

    if(this.root.left) {
      var leftTree = new BinarySearchTree();
      leftTree.root = this.root.left;
      if(leftTree.inorder() != null) {
        items = items.concat(leftTree.inorder());
      }
    }
    
    items.push(this.root.value);

    if(this.root.right) {
      var rightTree = new BinarySearchTree();
      rightTree.root = this.root.right;
      if(rightTree.inorder() != null) {
        items = items.concat(rightTree.inorder());
      }
    }

    return items;
  }

  this.preorder = function() {
    if(this.root == null) {
      return null;
    }

    var items = [this.root.value];

    if(this.root.left) {
      var leftTree = new BinarySearchTree();
      leftTree.root = this.root.left;
      if(leftTree.preorder() != null) {
        items = items.concat(leftTree.preorder());
      }
    }

    if(this.root.right) {
      var rightTree = new BinarySearchTree();
      rightTree.root = this.root.right;
      if(rightTree.preorder() != null) {
        items = items.concat(rightTree.preorder());
      }
    }

    return items;
  }

  this.postorder = function() {
    if(this.root == null) {
      return null;
    }

    var items = [];

    if(this.root.left) {
      var leftTree = new BinarySearchTree();
      leftTree.root = this.root.left;
      if(leftTree.postorder() != null) {
        items = items.concat(leftTree.postorder());
      }
    }

    if(this.root.right) {
      var rightTree = new BinarySearchTree();
      rightTree.root = this.root.right;
      if(rightTree.postorder() != null) {
        items = items.concat(rightTree.postorder());
      }
    }

    items.push(this.root.value);

    return items;
  }
  
  // Breadth First Search Methods
  this.levelOrder = function() {
    if(this.root == null) {
      return null;
    }

    var queue = [];
    queue.push(this.root);

    var values = [];
    values.push(this.root.value);

    var index = 0;
    while(queue.length != 0) {
      if(queue[0].left && index==0) {
        values.push(queue[0].left.value);
        queue.push(queue[0].left);
        index++;
      } else if(queue[0].right && index==1) {
        values.push(queue[0].right.value);
        queue.push(queue[0].right);
        index++;
      }
      else {
        queue.shift();
        index = 0;
      }
    }

    return values;
  }

  this.reverseLevelOrder = function() {
    if(this.root == null) {
      return null;
    }

    var queue = [];
    queue.push(this.root);

    var values = [];
    values.push(this.root.value);

    var index = 0;
    while(queue.length != 0) {
      if(queue[0].right && index==0) {
        values.push(queue[0].right.value);
        queue.push(queue[0].right);
        index++;
      } else if(queue[0].left && index==1) {
        values.push(queue[0].left.value);
        queue.push(queue[0].left);
        index++;
      }
      else {
        queue.shift();
        index = 0;
      }
    }

    return values;
  }
  
  // Remove Methods
  this.remove = function(leafValue) {
    if(!this.root) {
      return null;
    }

    var i = this.root;
    var iParent = null;
    
    while(i!=null) {
      if(leafValue == i.value) {
        break;
      } else if(leafValue < i.value) {
        if(i.left) {
          iParent = i;
          i = i.left;
        } else {
          return null;
        }
      } else if(i.right) {
        iParent = i;
        i = i.right;
      } else {
        return null;
      }
    }

    var children =
      (i.left !== null ? 1 : 0) + (i.right !== null ? 1 : 0);

    // Case 1: Target has no children
    if (children === 0) {
      if(!iParent) {
        this.root = null;
      } else if(i.value < iParent.value) {
        iParent.left = null;
      } else {
        iParent.right = null;
      }
    }
    
    // Case 2: Target has one child
    if (children === 1) {
      if(i == this.root) {
        this.root = (i.left !== null ? i.left : i.right !== null ? i.right : null);
      } else if(i == iParent.left) {
        iParent.left = (i.left !== null ? i.left : i.right);
      } else {
        iParent.right = (i.left !== null ? i.left : i.right);
      }
    }
	
	// Case 3: Target has two children
    if (children == 2) {
      if(i.right.left) {
        var k = i.right.left;
        while(k.left != null) {
          k = k.left;
        }
        i.value = k.value;
        k = null;
      } else {
        if(iParent) {
          i = i.right;
        } else {
          this.root.value = i.right.value;
          this.root.right = null;
        }
      }
    }
  };
  
  this.invert = function() {
    if(!this.root) {
      return null;
    }
	
    var tempRight = this.root.right;

    if(this.root.left) {
      var leftBST = new BinarySearchTree();
      leftBST.root = this.root.left;
      leftBST.invert();
      this.root.left = this.root.right;
      this.root.right = leftBST.root;
    }

    if(tempRight) {
      var rightBST = new BinarySearchTree();
      rightBST.root = tempRight;
      rightBST.invert();
      if(!this.root.left) {
        this.root.right = null;
      }
      this.root.left = rightBST.root;
    }

    console.log(this.root);

  }
  // Only change code above this line
}

function isBinarySearchTree(tree) {
  // Only change code below this line
  if(!tree.root.value && !tree.left && !tree.right) {
    return true;
  } else if(tree.root) {
    var checks =  0;
    if(tree.root.left && tree.root.left.value < tree.root.value) {
      checks ++;
    }

    if(tree.root.right && tree.root.right.value > tree.root.value) {
      checks ++;
    }

    if(checks == 2) {
      return true;
    }
  }

  var checks = 0;

  if(tree.root.left) {
    var leftTree = new BinarySearchTree();
    leftTree.root = tree.root.left;
    if(isBinarySearchTree(leftTree)) {
      checks++;
    }
  } else {
    checks++;
  }

  if(tree.root.right) {
    var rightTree = new BinarySearchTree();
    rightTree.root = tree.root.right;
    if(isBinarySearchTree(rightTree)) {
      checks++;
    } 
  } else {
    checks++;
  }

  if(checks == 2) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

var findTreeHeights = function(root, height) {
  if(root == null) {
    return [height];
  }

  var heights = [height];

  if(root.left) {
    heights = heights.concat(findTreeHeights(root.left, height+1));
  }

  if(root.right) {
    heights = heights.concat(findTreeHeights(root.right, height+1));
  }
  
  if(heights != [-1] && heights.indexOf(-1) != -1) {
    heights.splice(heights.indexOf(-1),1)
  }

  return heights;
}

// var bst = new BinarySearchTree();
// var nodes = [];
// for(var x = 0; x<10; x++) {
  // nodes.push(new Node(x));
// }
// bst.root = nodes[5];
// nodes[5].right = nodes[7];
// nodes[5].left = nodes[3];
// nodes[3].left = nodes[2];
// console.log(bst.root);
